create database real_estate_db;

CREATE TABLE user_details (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    user_phone_number VARCHAR(20),
    user_address VARCHAR(255),
    address_zip_code VARCHAR(10),
    user_emergency_contact VARCHAR(255)
);
