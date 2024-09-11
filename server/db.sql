CREATE DATABASE real_estate_db;

CREATE TABLE user_details (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255),
    user_email VARCHAR(255)  UNIQUE,
    user_password VARCHAR(255),
    password_update_date VARCHAR(10),
    user_phone_number VARCHAR(20),
    user_address VARCHAR(255),
    address_zip_code VARCHAR(10),
    user_emergency_contact VARCHAR(255)
);

CREATE TABLE user_booking (
    user_id FOREIGN KEY,
    booking_id PRIMARY KEY,
    booking_date VARCHAR(255),
    booking_status_id STRING FOREIGN KEY,
    booking_place_id STRING FOREIGN KEY
);

CREATE TABLE booking_status (
    status_id STRING PRIMARY KEY,
    status_name STRING
)

CREATE TABLE payment (
    payment_id STRING PRIMARY KEY,
    user_id STRING FOREIGN KEY,
    amount DECIMAL,
    payment_date STRING
)

CREATE TABLE booking_place (
    place_id VARCHAR(255) PRIMARY KEY,
    place_name VARCHAR(255) VARCHAR(255),
    place_address VARCHAR(255)
)

CREATE TABLE place_photos (
    photo_id STRING PRIMARY KEY,
    place_id STRING FOREIGN KEY,
    s3_url STRING,
    photo_description STRING
)
