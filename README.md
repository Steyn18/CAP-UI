# CAP-UI
Working sample with html5(launchpad config) using managed approuter with ui(accessable) and srv(not accessable)


# Reference blog
https://community.sap.com/t5/technology-blogs-by-members/how-to-deploy-a-ui5-app-inside-a-cap-mta-project-and-make-it-available-from/ba-p/13560177

# Steps Followed 

cds init cap-ui  
cd cap-ui
cds add samples  //going to deprecate use cds add tiny-sample
cds add hana
cds add xsuaa
cds add mta

Create Managed Approuter

Add UI with deployed config and launchpad config

mbt build
cf deploy mta_archives/file.mtar

Access UI5 application in HTML5 Applications inside BTP Cockpit..
