function getFormvalue() {
    //Write your code here
	function getFormvalue() {
    // Prevent form from submitting normally
    event.preventDefault();
    
    // Get values from input fields
    let firstName = document.querySelector("input[name='John']").value.trim();
    let lastName = document.querySelector("input[name='Mark Doe']").value.trim();
    
    // Check if fields are empty
    if (!firstName || !lastName) {
        alert("Please enter both first and last names.");
        return;
    }
    
    // Display full name
    alert(firstName  + lastName);

}
