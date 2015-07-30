
 var bio = {"name":"Manodivya Kathiravan" , 
 "role":"Web Developer",
 "contact":
 {
 	"mobile":"6692229731",
 	"email":"divikathiravan16@gmail.com",
 	"github":"manodivya",
 	"location":"San Jose"
 },
 "bioPic":"images/img_6.jpg",
 "welcomeMessage":"Motivated graduate student and front-end software developer with 2 years professional experience looking for internship/Co-op opportunities", 
 "skills":[ "JavaScript","HTML","CSS","jQuery","JSON","AJAX","Java","Android"]
}





var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

var formattedContacts = [];
formattedContacts.push(HTMLmobile.replace("%data%",bio.contact.mobile));
formattedContacts.push(HTMLemail.replace("%data%",bio.contact.email));
formattedContacts.push(HTMLgithub.replace("%data%",bio.contact.github));
formattedContacts.push(HTMLlocation.replace("%data%",bio.contact.location));

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#header").append(formattedPic);
 $("#header").append(formattedMessage);


 for(i in formattedContacts)
 {
 	$("#topContacts").append(formattedContacts[i]);
 	$("#footerContacts").append(formattedContacts[i]);
 }

 if(bio.skills.length > 0)
 {
 	$("#header").append(HTMLskillsStart);
 	for(i in bio.skills)
 	{
 		var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
 		$("#skills").append(formattedSkills);
 	}

 }

 
var education = { 
	"schools":[
{
	"name" : "San Jose State University",
	"location" : "San Jose ,CA, USA",
	"degree":"MS",
	"majors" : "Computer Science  GPA: 4.0",
	"dates" : "2014-2016"
},
{
	
	"name"  : "Anna University",
	"location"  : "Chennai,India",
	"degree":"B.Tech",
	"majors" : "Information Technology   GPA: 3.75",
	"dates"  : "2007-2011" 
}
]
}

var work = {

"jobs":[
{
	"employer":"Infosys Limited",
	"title": "Systems Engineer",
	"location": "India",
	"dates":"Aug 2011 - Nov 2013",
	"description": "Worked on finacle mobile banking application that customizes Android/iOS applications for banks. Got a a comprehensive exposure to the mobile Banking architecture and the intelligence involved in banking services like SMS, GPRS/ 3G and USSD-enabled handsets."
},
{
	"employer": "VasCom Tech private limited ",
	"title": "Software Intern",
	"location": "India",
	"dates": "Dec 2010 - Apr 2011",
	"description":"MobiCare, Location Based Health care Services-Developed a java based mobile application which lets the mobile user to find nearby hospitals, blood banks, emergency care using traditional cellular network technology. The user’s location was determined by triangulation method."
}
]
}



var projects = {

"projects":[ 

{
	"title" : "Neighborhood Map",
	"dates" : "Summer 2015",
	"description" : "Developed a single-page application featuring a map of neighborhood I would like to visit and added functionality including map markers to identify popular locations and implemented third-party API's that provide additional information about each of these locations(such as StreetView images, Wikepedia articles,Yelp reviews and groupons)."

},
{
	"title" : "Stock Market Ticker",
	"dates" : "Fall 2014",
	"description" : "Reverse engineered a stock market ticker. Identified various flaws and security loopholes and bypassed their payment system. This project was adjudicated first among 15  projects by students and professor.",
    "images" : " "
},

{
	"title" :"Cryptanalysis Project",
	"dates" :"Fall 2014",
	"description" :"As a part of cryptanalysis project solved the  Mystery Twister challenges. Alice Birthday Party- I  (Used Common modulus attack on RSA to decrypt the encrypted message without knowing the corresponding secret key). Alice Birthday party -II ( Used Chinese remainder theorem attack on RSA to decrypt the encrypted message that used the same exponent value ‘e’  for the same message).",
     "images" : " "

},

{

"title" :"Building A Content-Addressable Network (CAN)",
"dates" : "Spring 2015",
"description" : "Designed and implemented the file insert and retrieve algorithm, routing mechanism, node join and leave protocol and Displaying peer information for a distributed, decentralized P2P infrastructure that provides a distributed hash table functionality.",
"images" : ""

},
{
 "title" : "Finacle Mobile Banking Application",
 "dates" : "Aug 2011 - Nov 2013",
 "description": "Developed Set/Change primary account module,Enabled multiple mobile access mechanisms,Unit tested and defect reporting of the new features,Designed and developed self-fund transfer, third-party transfers, check book request UI Screens for Android Application using XML,Encryption/Decryption module using DES, AES scheme for the login and transaction password."
}
]
}



function displayWork()
{
for (i in work.jobs) 
{
 
 $("#workExperience").append(HTMLworkStart);

 var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
 var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
 var formattedEmpTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmpTitle);
 var formattedDate = HTMLworkDates.replace("%data%",work.jobs[i].dates);
 $(".work-entry:last").append(formattedDate);
 var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
 $(".work-entry:last").append(formattedLocation);
 var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
 $(".work-entry:last").append(formattedDescription);
 
}
}
displayWork();


projects.display = function display()
{
for (i in projects.projects) 
{
$("#projects").append(HTMLprojectStart);
var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);

$(".project-entry:last").append(formattedTitle);
$(".project-entry:last").append(formattedDates);
$(".project-entry:last").append(formattedDescription);
}
}

projects.display(); 


education.display = function displayEducation()

{
	for(i in education.schools)
	{
$("#education").append(HTMLschoolStart);
var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);

$(".education-entry:last").append(formattedschoolName + formattedDegree);
$(".education-entry:last").append(formattedLocation);
$(".education-entry:last").append(formattedDates);
$(".education-entry:last").append(formattedMajors);

}
}

$("#main").append(internationalizeButton);
$("#map-div").append(googleMap);