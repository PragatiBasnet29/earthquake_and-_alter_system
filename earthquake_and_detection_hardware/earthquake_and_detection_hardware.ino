#include <SoftwareSerial.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x3F, 16, 2);

#define xPin A2
#define yPin A1
#define zPin A0

// Calibrated minimum and maximum Raw Ranges for each axis
int xMin = 263, xMax = 393;
int yMin = 264, yMax = 395;
int zMin = 267, zMax = 297;

const int samples = 10;
const int threshold = 1;

SoftwareSerial mySerial(2, 3);  // RX, TX for GSM module
const int buzzerPin = 9;
int flag = 0;
bool isEarthquake = false;

String message = "Earthquake Alert!\r\nSafety Guidelines:\r\n"
                 "1. Drop, Cover, and Hold On.\r\n"
                 "2. Stay Indoors and away from hazards.\r\n"
                 "3. Evacuate if necessary to open areas.\r\n"
                 "Listen to authorities for updates.\r\n"
                 "Emergency Contacts:\r\n"
                 "- Medical Emergency: 104\r\n"
                 "- Fire Department: 103\r\n";

void setup() {
  pinMode(buzzerPin, OUTPUT);
  digitalWrite(buzzerPin, LOW);

  lcd.begin(16, 2);
  lcd.init();
  lcd.backlight();
  lcd.print("System Init...");
  delay(1000);

  Serial.begin(9600);  // For serial monitoring

  // Initialize GSM module
  mySerial.begin(9600);  
  Serial.println("Initializing GSM Module...");
  mySerial.println("AT");  // Test communication
  updateSerial();
}

void loop() {
  int xRaw = 0, yRaw = 0, zRaw = 0;
  for (int i = 0; i < samples; i++) {
    xRaw += analogRead(xPin);
    yRaw += analogRead(yPin);
    zRaw += analogRead(zPin);
  }
  xRaw /= samples;
  yRaw /= samples;
  zRaw /= samples;

  long xMilliG = map(xRaw, xMin, xMax, -1000, 1000);
  long yMilliG = map(yRaw, yMin, yMax, -1000, 1000);
  long zMilliG = map(zRaw, zMin, zMax, -1000, 1000);

  float x_g_value = xMilliG / 1000.0;
  float y_g_value = yMilliG / 1000.0;
  float z_g_value = zMilliG / 1000.0;

  // Print sensor data for debugging
  Serial.print(x_g_value, 0); Serial.print("G\t");
  Serial.print(y_g_value, 0); Serial.print("G\t");
  Serial.print(z_g_value, 0); Serial.println("G");

  // Check if any axis exceeds the threshold
  isEarthquake = (abs(x_g_value) > threshold) || (abs(y_g_value) > threshold) || (abs(z_g_value) > threshold);

  if (isEarthquake) {
    Serial.println("Earthquake Detected!");
    buzzer();
    lcdEarthquakeAlert();
    sendSms();
  }

  delay(1000);  // Adjust delay as needed
}

void buzzer() {
  digitalWrite(buzzerPin, HIGH);  // Sound the alarm
  delay(1000);
  digitalWrite(buzzerPin, LOW);   // Turn off the alarm
}

void lcdEarthquakeAlert() {
  lcd.clear();
  lcd.print("Earthquake Alert!");
  lcd.setCursor(0, 1);
  lcd.print("Take precautions!");
  delay(2000);
}

void sendSms() {
  if (flag == 0) {
    Serial.println("Sending SMS...");
    mySerial.println("AT+CMGF=1");  // Set SMS to text mode
    updateSerial();
    mySerial.println("AT+CMGS=\"+9779865435584\"");  // Replace with your phone number
    updateSerial();
    mySerial.print(message);  // Send the message
    updateSerial();
    mySerial.write(26);  // Send the CTRL+Z to send the SMS
    updateSerial();
    flag = 1;
  }
}

void updateSerial() {
  delay(500);
  while (Serial.available()) {
    mySerial.write(Serial.read());
  }
  while (mySerial.available()) {
    Serial.write(mySerial.read());
  }
}
