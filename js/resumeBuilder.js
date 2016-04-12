/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Lauren Colls");
// var awesomethoughts = "awesome"

// var funThoughts =awesomethoughts.replace("awesome", "fun")
// // $("#main").append(funThoughts);
// var name = "Lauren Colls"
// var role = "Web Developer"

// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
// var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
// var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
// var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
// var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// var education = {
// 	"lastSchool" : "Victoria University of Wellington",
// 	"years" :"4",
// 	"location": "Wellington"
// };

// var work = {};
// work.position = "Research Assistant"
// work.employer = "Victoria University of Wellington"
// work.years = 2
// work.location = "Wellington"

// var formattedPosition = HTMLworkTitle.replace("%data%", work["position"]);
// var formattedEdName = HTMLschoolName.replace("%data%", education["lastSchool"]);

// $("#header").prepend(formattedName);
// $("#header").append(formattedRole);

// $("#main").append(formattedWelcomeMsg);
// $("#main").append(formattedMobile);
// $("#main").append(formattedEmail);
// $("#main").append(formattedLocation);

// $("#main").append(formattedBioPic);

// $("#main").append(work["position"]);
// $("#main").append(education.lastSchool);



var bio = {
	"name" : "Lauren Colls",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "027 302 1676",
		"email" : "colls.lauren@gmail.com",
		"github" : "Lau-Ren",
		"twitter" : "",
		"location" : "Wellington"
	},
	"welcomeMessage" :"Lorem ipsum dolor sit ame",
	"skills": ["this", "that", "these","them"],
	"biopic" : "./images/me.jpg"
};

var education = {
	"schools" : [	
		{
			"name": "Victoria University of Wellington",
			"location": "Wellington",
			"qualification" : "MSc",
			"major" : "Psychology",
			"date" : 2016
		}
	]
	,
	"onlineCourses" : [
	{
		"name" : "Udacity Javasrcript Basics",
		"url": "https://www.udacity.com",
		"date" : 2016,
	},
	{
		"name" : "CodeAcademy Javasrcript ",
		"url": "https://www.codecademy.com/",
		"date" : 2015,
	},
	{
		"name" : "FreeCodeCamp Javasrcript ",
		"url": "https://www.freecodecamp.com/",
		"date" : 2016
	}

	]

};

var work = {
	"jobs" : [
		{
			"employer" : "Victoria University of Wellington",
			"title": "Research Assistant",
			"date" : "2014-2016",
			"location": "Wellington",
			"description" :"VUW RA job decription here"
		},
		{
			"employer" :"Victoria University of Wellington",
			"title": "Tutor",
			"date" : 2015,
			"location": "Wellington",
			"description" :"VUW tutor job decription here"

		},
		{
			"employer" : "Litmus",
			"title": "Research Assistant",
			"date" : "2014-2016",
			"location": "Wellington",
			"description" :"Litmus RA job decription here"


		}
	]


};

 var projects = {
 	"projects" : [
		{	
			"title" : "example1",
			"date" : 2016,
			"description" : "example description of this project",
			"images" : "",

		},
		
		{
			"title" : "example2",
			"date" : 2016,
			"description" : "example description of this project",
			"images" : "",

		},
		{
			"title" : "example 3",
			"date" : 2016,
			"description" : "example description of this project",
			"images" : "",

		}
 	]


 };

// var formattedContact = HTMLcontactGeneric.replace("%data%", "")
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedLocation);

	var formattedSkills 
	var formattedworkEmployer
	var formattedworkTitle
	var formattedworkDate
	var formattedworkLocation
	var formattedworkDescription

	var formattedprojectTitle
	var formattedprojectDate
	var formattedprojectDescription
	var formattedprojectImage





	if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
		
		for (skill in bio.skills){
			formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills:last").append(formattedSkills);

		}

	};

function displayWork () {



	if (work.jobs.length > 0) {
		
		
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			formattedworkDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
			formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description); 
			
			var formattedEmployerTitle =formattedworkEmployer + formattedworkTitle

			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedworkLocation);
			$(".work-entry:last").append(formattedworkDate);
			$(".work-entry:last").append(formattedworkDescription);


		}



	} else {


	};
	
}

displayWork();


$(document).click(function(loc) {
  var x = loc.pageX
  var y =loc.pageY

  logClicks(x,y)
});

 function logClicks(x,y) {
console.log(x + y)

 }



 function inName(name) {
 	name = name.trim().split(" ");
 	name[1] = name[1].toUpperCase();
 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
 	return name[0] + " " + name[1]
 }
 $('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);


projects.display = function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			formattedprojectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
			formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			
 console.log(formattedprojectTitle)
			$(".project-entry:last").append(formattedprojectTitle);
			$(".project-entry:last").append(formattedprojectDate);
			$(".project-entry:last").append(formattedprojectDescription);
			$(".project-entry:last").append(formattedprojectImage);


		}

}

projects.display()

education.display = function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].qualification);
			var formattedschoolDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

			$(".education-entry:last").append(formattedschoolName);
			$(".education-entry:last").append(formattedschoolDegree);
			$(".education-entry:last").append(formattedschoolDate);
			$(".education-entry:last").append(formattedschoolLocation);

			$(".education-entry:last").append(formattedschoolMajor);

		}
			$("#education:last").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses) {
		
			$("#education:last").append(HTMLschoolStart);


			var	formattedonlineName = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].name);
			var	formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].qualification);
			var	formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			var	formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

			$(".education-entry:last").append(formattedonlineName);
			$(".education-entry:last").append(formattedonlineSchool);
			$(".education-entry:last").append(formattedonlineDate);
			$(".education-entry:last").append(formattedonlineURL);


		}

}

education.display()



