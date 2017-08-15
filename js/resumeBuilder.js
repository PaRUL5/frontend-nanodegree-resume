var bio = {
    "name": "Parul Kumar",
    "role": "Web developer",
    "contacts": {
        "mobile": "852xxxxxx8",
        "email": "prlkumar96@gmail.com",
        "github": "https://github.com/PaRUL5",
        'location': "Jahangir puri,New Delhi"
    },
    "welcomeMessage": "Hello!",
    "skills": [
        "HTML",
        "CSS",
        "javascript",
        "Bootstrap"
    ],
    "biopic": "https://www.w3schools.com/w3css/img_avatar3.png",
};


var education = {
    "schools": [{
        "name": "USICT",
        "location": "Dwarka,New Delhi",
        "degree": "B.Tech.",
        "majors": ["Computer Science"],
        "dates": "01-August-2018",
        "url": "www.ipu.ac.in"
    }],

    "onlineCourses": [{
            "title": "Algorithmic Toolbox",
            "school": "Coursera",
            "dates": "12-May-2017",
            "url": "https://www.coursera.org/account/accomplishments/verify/QB6QBA6ZLL8N"
        },
        {
            "title": "Java for android",
            "school": "Coursera",
            "dates": "12-August-2016",
            "url": "https://www.coursera.org/account/accomplishments/verify/NDRRQNBF7X23"
        }
    ],
};

var work = {
    "jobs": [{
            "employer": "Live Run",
            "title": "Software engineer",
            "location": "New Delhi,India",
            "dates": "july 2014 - september 2016",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Accenture",
            "title": "Software engineer",
            "location": "New Delhi,India",
            "dates": "september 2016 - current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ],
};

var projects = {
    "projects": [{
        "title": "Weather App",
        "dates": "12-May-2015",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
        "images": ["http://via.placeholder.com/250/00ced1", "http://via.placeholder.com/250/00ced1"]
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedGithub);

    $("#header").append(formattedWelcomeMessage);
    $("#header").append(formattedBioPic);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
};
bio.display();


work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();




projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDate);
        $(".project-entry:last").append(formattedProjectDescription);
        for (var j = 0; j < projects.projects[i].images.length; j++) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }
};

projects.display();

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.schools[i].url);
        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedMajor);
        $(".education-entry:last").append(formattedURL);
    }
    $("#education").append(HTMLonlineClasses);

    for (var j = 0; j < education.onlineCourses.length; j++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $("#education").append(formattedTitle + formattedSchool);
        $("#education").append(formattedDate);
        $("#education").append(formattedOnlineURL);
    }

};

education.display();

$("#mapDiv").append(googleMap);
