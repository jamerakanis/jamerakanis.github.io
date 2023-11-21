import { Logic } from "./logic";

// get reference to app
const app = document.getElementById("app") as HTMLElement;
if (!app) throw new Error("app div not found");

// clear the panel of any content DO NOT PUT ANY HTML ABOVE THIS
app.innerHTML = "";

// making logic
const logic = new Logic()