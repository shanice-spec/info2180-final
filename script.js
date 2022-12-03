//Beginning of Side Bar Items
var home = document.getElementById("home");
var user = document.getElementById("user");
var logout = document.getElementById("logout");
var contact = document.getElementById("addcontact");
//End of Side Bar items

//Beginning of filter items headings

var all = document.getElementById("all-filter");
var support = document.getElementById("support-filter");
var sales = document.getElementById("sales-filter");
var assigned_con = document.getElementById("assigned-filter")
//End of filter items

//Beginning of filter rows 
var all_issues = $(".all");
//End of filter rows

//Beginning of hyperlinks
var views = document.getElementsByClassName("views");
var views_id = document.getElementsByClassName("views_id");
//End of hyperlinks

//Beginning of create issue
var title = document.getElementById("add-issue-title");
var desc = document.getElementById("add-issue-desc");
var assigned = document.getElementById("add-issue-assigned");
var type = document.getElementById("add-issue-type");
var priority = document.getElementById("add-issue-priority");
var createIssue = document.getElementById("issueSubmit");
//End of create issue

//Beginning of create user
var fname = document.getElementById("add-user-fname");
var lname = document.getElementById("add-user-lname");
var Useremail = document.getElementById("add-user-email");
var Userpassword = document.getElementById("add-user-password");
var role = document.getElementById("role");
var createUser = document.getElementById("addSubmit");
var createNewUser = document.getElementById("new_user_create");
//End of create user

//Beginning of view issue
var views = document.getElementsByClassName("views");
var views_id = document.getElementsByClassName("views_id");
var closeIssue = document.getElementById("close-issue");
var inProgressIssue = document.getElementById("in-progress-issue");
//End of view issue



//Check if hyperlink for issue is clicked
if(views){
    for(let i = 0; i < views.length; i++){
        views[i].addEventListener("click", () =>{
            $.get("subpages/issueView.php?index="+views_id[i].value, function(responseText){
                $("body").html(responseText);
            });
        });
    }
}
//End of hyperlink check

//Check if close issue button is clicked
if(closeIssue){
    var input = document.getElementById("issue-id");

    closeIssue.addEventListener('click', () => {
        $.get('scripts/closeIssue.php?index='+input.value, function(responseText){
            alert("This issue is now closed.");
        });
    });
}
//End of close issue button is clicked

//Check if in progress issue button is clicked
if(inProgressIssue){
    var input = document.getElementById("issue-id");

    inProgressIssue.addEventListener('click', () => {
        $.get('scripts/progressIssue.php?index='+input.value, function(responseText){
            alert("This issue is now in progress.");
        });
    });
}
//End of in progress issue button is clicked

//Check if filter by all is clicked
if(all){
    all.addEventListener("click", ()=>{
        support.classList.remove("active");
        assigned_con.classList.remove("active");
        all.classList.add("active");
        sales.classList.remove("active")
        all_issues.each(function(i){
            $(this).show();
        });
    
    });
}
//End of all check

//Check if filter by open is clicked
if(support){
    support.addEventListener("click", ()=>{
        support.classList.add("active");
        assigned_con.classList.remove("active");
        all.classList.remove("active");
        sales.classList.remove("active");
    
        all_issues.each(function(i){
            if($(this).hasClass("Support")){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        });
    
    });
}
//End of filter by open

//Check if filter by assigned tickets is clicked
if(assigned_con){
    assigned_con.addEventListener("click", ()=>{
        support.classList.remove("active");
        assigned_con.classList.add("active");
        all.classList.remove("active");
        sales.classList.remove("active");
    
        all_issues.each(function(i){
            if($(this).hasClass("assigned")){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        });
    });
}


//End of assigned tickets check

if(sales){
    sales.addEventListener("click", ()=>{
        support.classList.remove("active");
        assigned_con.classList.remove("active");
        all.classList.remove("active");
        sales.classList.add("active");
    
        all_issues.each(function(i){
            if($(this).hasClass("Sales-Leads")){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        });
    });
}

//Check if home side bar item is clicked
if(home){
    home.addEventListener("click", ()=>{
        $.get("allcontacts.php", function(responseText){
            $("body").html(responseText);
        });
    });
}
//End of home side bar check

//Check if user side bar item is click
if(user){
    user.addEventListener("click", ()=>{
        $.get("viewusers.php", function(responseText){
            $("body").html(responseText);
        });
    });
}
//End of user side bar item check

//Check if issue side bar item is clicked
if(contact){
    contact.addEventListener("click", ()=>{
        $.get("subpages/createIssue.php", function(responseText){
            $("body").html(responseText);
        });
    });
}
//End of issue side bar item check

//Check if logout side bar issue item is clicked
if(logout){
    logout.addEventListener("click", ()=>{
        $.get("logout.php", function(responseText){
            $.get("index.php", function(responseText){
                $("body").html(responseText);
            });
        });
    });
}
//End of logout issue side bar item check

//Check if create issue is click
if(createNewUser){
    createNewUser.addEventListener("click", ()=>{
        $.get("adduser.php", function(responseText){
            $("body").html(responseText);
        });
    });
}
//End of create issue check

//Check if the button to create a new issue is clicked
if(createIssue){
    createIssue.addEventListener("click", ()=>{
        //Check if form is filled out
        if(title.value != "" && desc.value != "" && assigned.value != "" && type.value != "" && priority.value != ""){
            $.get("scripts/createIssue.php?title="+title.value+"&desc="+desc.value+"&assigned="+assigned.value+"&type="+type.value+"&priority="+priority.value, function(responseText){
                eval(responseText)
                title.value="";
                desc.value="";
                
            });
        }else{
            alert("Invalid data entered with form fields.");
        }
    });
}
//End of button create issue clicked

//Check if the button to create a new user is clicked
if(createUser){
    createUser.addEventListener("click", ()=>{
        email_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        if(fname.value != "" && lname.value != "" && role.value !="" && email_reg.test(Useremail.value) && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(Userpassword.value)){
            $.get("submitUser.php?fname="+fname.value+"&lname="+lname.value+"&email="+Useremail.value+"&password="+Userpassword.value+"&role="+role.options[role.selectedIndex].text, function(responseText){
                eval(responseText);
                fname.value="";
                lname.value="";
                Useremail.value="";
                Userpassword.value="";
                
            });
        }else{
            alert("Invalid data entered with form fields.");
        }
    });
}
//End of button create user clicked
