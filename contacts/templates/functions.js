// Variable to track the most recently selected row - set on click of edit / delete buttons in contacts table
let selectedRow = null;

function fetchData() {
    // Function to fetch contacts data via REST API
    const tableBody = document.querySelector("#data-table tbody"),
        loadingIndicator = document.getElementById("loading"),
        errorIndicator = document.getElementById("error")

    fetch('{% url "api_contacts-list" %}')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok (status: ${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            tableBody.innerHTML = '';
            data.forEach(contact => {
                const row = document.createElement("tr");
                row.innerHTML = `
              <td style="display: none">${contact.id}</td>
              <td>${contact.full_name}</td>
              <td>${contact.date_of_birth}</td>
              <td>${contact.email}</td>
              <td>${contact.phone_number}</td>
              <td>${contact.full_address}</td>
              <td style="display: none">${contact.first_name}</td>
              <td style="display: none">${contact.last_name}</td>
              <td style="display: none">${contact.street_address}</td>
              <td style="display: none">${contact.city}</td>
              <td style="display: none">${contact.postal_code}</td>
              <td style="display: none">${contact.county}</td>
              <td style="display: none">${contact.country}</td>
              <td>
              <button class="btn btn-primary" data-bs-toggle="modal" onclick="openEditModal(this)">Edit</button> 
              <button class="btn btn-danger" data-bs-toggle="modal" onclick="openDeleteModal(this)">Delete</button>
              </td>
            `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            errorIndicator.style.display = "block";
            errorIndicator.textContent = "Error loading data: " + error.message;
        })
        .finally(() => {
            loadingIndicator.style.display = "none";
        });
}

function getContactFormData(form, formType) {
    // Function to return form data for add or edit contact form type
    const formElements = form.elements
    let prefix
    if (formType === 'add') {
        prefix = ''
    } else if (formType === 'edit') {
        prefix = 'edit_'
    }

    return {
        'first_name': formElements[`${prefix}first_name`].value,
        'last_name': formElements[`${prefix}last_name`].value,
        'date_of_birth': formElements[`${prefix}date_of_birth`].value,
        'email': formElements[`${prefix}email`].value,
        'phone_number': formElements[`${prefix}phone_number`].value,
        'street_address': formElements[`${prefix}street_address`].value,
        'city': formElements[`${prefix}city`].value,
        'postal_code': formElements[`${prefix}postal_code`].value,
        'county': formElements[`${prefix}county`].value,
        'country': formElements[`${prefix}country`].value
    }
}

function addContact(formId) {
    // Function executed on submission of the 'add contact' form to send a REST API request to the server to create a
    // new contact record
    const form = document.getElementById(formId),
        formData = getContactFormData(form, 'add')

    // Send post request to create new contact
    fetch('{% url "api_contacts-list" %}', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok (status: ${response.status})`)
        }
        return response.json();
    }).then(data => {
        console.log('Success:', data)
    }).catch(error => {
        console.error('Error:', error)
    })
}

function getSelectedRowId(selectedRow) {
    // Returns the ID of the selected table row
    return selectedRow.getElementsByTagName('td')[0].textContent.trim()
}

function openEditModal(button) {
    // Displays edit modal with selected rows values bound to the 'edit contact' form fields
    selectedRow = button.closest("tr");
    let cells = selectedRow.getElementsByTagName('td')
    document.getElementById('edit_first_name').value = cells[6].textContent
    document.getElementById('edit_last_name').value = cells[7].textContent
    document.getElementById('edit_date_of_birth').value = cells[2].textContent
    document.getElementById('edit_email').value = cells[3].textContent
    document.getElementById('edit_phone_number').value = cells[4].textContent
    document.getElementById('edit_street_address').value = cells[8].textContent
    document.getElementById('edit_city').value = cells[9].textContent
    document.getElementById('edit_postal_code').value = cells[10].textContent
    document.getElementById('edit_county').value = cells[11].textContent
    document.getElementById('edit_country').value = cells[12].textContent

    let editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();
}

function confirmEdit(formId) {
    // Function executed on submission of the 'edit contact' form to send a REST API request to the server to edit
    // the relevant contact record
    if (selectedRow) {
        const form = document.getElementById(formId),
            formData = getContactFormData(form, 'edit'),
            editedId = getSelectedRowId(selectedRow)

        // Send post request to create new contact
        fetch(`{% url "api_contacts-list" %}${editedId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok (status: ${response.status})`)
            }
            return response.json();
        })
    }
}

function openDeleteModal(button) {
    // Displays delete modal
    selectedRow = button.closest("tr");
    let deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    deleteModal.show();
}

function confirmDelete() {
    // Function executed on submission of the 'confirm delete' form to send a REST API request to the server to delete
    // the relevant contact record
    if (selectedRow) {
        // Delete selected row from DB
        const deletedId = getSelectedRowId(selectedRow)

        // Send post request to create new contact
        fetch(`{% url "api_contacts-list" %}${deletedId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {

            const sleep = ms => new Promise(r => setTimeout(r, 2000))

            if (!response.ok) {
                throw new Error(`Network response was not ok (status: ${response.status})`)
            }
            return response.json();
        })
    }
}
