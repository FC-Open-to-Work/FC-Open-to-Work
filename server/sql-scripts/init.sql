-- Create the OTW database
CREATE DATABASE IF NOT EXISTS OTW;

-- Switch to the OTW database
USE OTW;

-- Create the 'springuser' and grant all privileges on the 'OTW' database
CREATE USER 'springuser'@'%' IDENTIFIED BY 'opentowork';
GRANT ALL ON OTW.* TO 'springuser'@'%';
