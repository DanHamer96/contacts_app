# Django Project Setup Guide

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