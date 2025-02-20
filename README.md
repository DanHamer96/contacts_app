# Contacts App - Django Project Setup Guide

## Prerequisites

Ensure you have the following installed on your system:

- Python (>=3.12 recommended)
- pip (Python package manager)
- virtualenv (for creating a virtual environment)

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <repository_url>
cd <project_directory>
```

### 2. Create and Activate a Virtual Environment

#### Windows:

```sh
python -m venv venv
venv\Scripts\activate
```

#### macOS/Linux:

```sh
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

```sh
pip install -r requirements.txt
```

### 4. Apply Database Migrations

```sh
python manage.py migrate
```

### 5. Run the Development Server

```sh
python manage.py runserver
```

The project should now be running locally at:

```
http://127.0.0.1:8000/
```

### 6. Deactivating the Virtual Environment (Optional)

When you're done working on the project, deactivate the virtual environment by running:

```sh
deactivate
```

## Database Handling

This project uses **SQLite** by default. The database file (`db.sqlite3`) is included in `.gitignore`, so each user will generate their own database instance locally.

If you need to reset the database, delete `db.sqlite3` and re-run:

```sh
python manage.py migrate
```

## App Features

### View existing contacts in the database
![image](https://github.com/user-attachments/assets/40a80e46-6c07-4536-9f40-5832b076e12f)
*A stylish, modern UI is used.*


### Add a new contact to the database
![image](https://github.com/user-attachments/assets/3d15ee65-4026-4e4e-916f-cd5d24001ddd)
*Clicking the 'Add Contact' button generates a popup form with controls to add a new contact record.*


### Edit an existing contact in the database
![image](https://github.com/user-attachments/assets/ca936056-cad9-40cf-b250-e264528cef54)
*Clicking the 'Edit' button for a given row generates a popup form with controls to edit an existing contact record.*


### Delete an existing contact from the database
![image](https://github.com/user-attachments/assets/8357bf46-8f5b-42a8-8089-3f7fabd59953)
*Clicking the 'Delete' button for a given row generates a popup form with controls to delete an existing contact record.*

