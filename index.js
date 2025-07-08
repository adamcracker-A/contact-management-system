function showactions () {
    let startstop = true;
    const contacts = [];
    while(startstop){
    const number = prompt("Contact Management System \n" +
        "------------------------------- \n" +
        "1. Add a contact \n" +
        "2. Delete a contact \n" +
        "3. Show contacts \n" +
        "4. Search contacts \n" +
        "5. Exit \n" +
        "enter an operation(1-5): ");
        function addcontact(){
            const name = window.prompt("enter your name: ");
            const email = window.prompt("enter your email: ");

            const contact = {
                name: name,
                email: email
            }
            contacts.push(contact);
        }
        function deletecontact(){
            let output;
            contacts.forEach((contact, index) => {
                output +=`${index + 1}. Name: ${contact.name}, Email: ${contact.email}\n`;
            });
            let iddelete = prompt(`${output}\n enter an id to delete: `);
            if(isNaN(iddelete)|| iddelete > contacts.length){
                alert("invalid");
            }
            else{
                contacts.splice(iddelete - 1, 1);
            }
        }
        function searchcontact(){
            const searchname = prompt("search a name: ");
            let result = [];
            for(let contact of contacts){
                if(searchname == contact.name) result.push(contact);                
            }

            listcontact(result);

        }
        function listcontact(contacts){
            let output;
            contacts.forEach((contact, index) => {
                output +=`${index + 1}. Name: ${contact.name}, Email: ${contact.email}\n`;
            });
            alert(output);
        }
        switch(number){
            case("1"):
                addcontact();
                break;
            case("2"):
                deletecontact();
                break;
            case("3"):
                listcontact(contacts);
                break;
            case("4"):
                searchcontact();
                break;
            case("5"):
                startstop = false;
                break;
            default:
                window.alert("unknown!");
                break;
                
        } 
    }

}
showactions();