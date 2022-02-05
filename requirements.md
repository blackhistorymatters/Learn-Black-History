# Vision

- What is the vision of this product?
  - To provide a space for simple education on the topic of black history.

- What pain point does this project solve?
  - Lack of black history education in America.

- Why should we care about your product?
  - Because understanding the full history of the country is necessary, but resources focused on black history are lacking. You can not tell the history of the United States without black history.

# Scope

- IN - What will your product do
  - Describe the individual features that your product will do.
    - It will allow a user to navigate the information provided through the website before committing to using our services.
    - There will be information on black history displayed on the landing page as well as a sign up feature, providing the user the ability to save information that they find useful.
    - This allows them to return for further use, wether it be for studying, ect.
    - The user will also be able to update or create facts if they choose to do so, as well as remove facts that they no longer want on their page.

- OUT - What will your product not do.
  - It will not allow users to contribute to the main page unless their facts have been validated by the research team.
  - It will not become a social application.

## Minimum Viable Product

- What will your MVP functionality be?
  - Display content to the page
  - There will be an option for the user to login via Auth0
  - Add content to the users profile
  - Content will have the ability to be updated by the user
  - It will also be removed by the user if they wish to do so

- What are your stretch goals?
  - Giving the user the ability to create/update a new or existing fact.
  - Add a memory game aspect based on facts saved by the user, creating a studying element.
    - This could evolve into fill-in the blank and other studying styles.

## Stretch

- What stretch goals are you going to aim for?
  - Allowing users to contribute to the website provided information.
  - After a user signs up they will have the choice to be sent a fact of the day via their email.

# Functional Requirements

List the functionality of your product. This will consist of tasks such as the following:

  1. Users who are not yet signed up can generate facts on the landing page.
  2. A user can update their profile information
  3. A user can save website information to their profile.
  4. User can get a fact by a key word or person.
  5. Users can remove facts from their profile.
  6. The application will have a nav bar consisting of the home, profile(when signed in), and about page.
  7. A signup form on the landing page via a modal.

## Data Flow

  1. User hits landing page where nav bar is displaying a 'Home' link, a 'Profile' link if logged in, and an 'About Us' link.
  2. Landing page renders a card with a button to generate a random fact and a button to allow user to sign up/create profile, as well as a 'Login' button.
  3. If user selects random fact, button sends request to backend, which then conducts an API call to render a randomly generated fact.
  4. If user selects option to sign up, the Auth0 login is rendered and once submitted, user is routed to their profile page.
  5. Once logged in, user is given option to search for facts by tags or people and a 'Logout' button is rendered at the bottom of the page.
  6. Facts are rendered as cards, displaying the name, image, and content of the fact, along with a star/heart to "like" the fact and save it to their profile.
  7. Once a fact is saved to a user's profile, they are given the option to remove the fact or update it within their personal profile.
  8. If the user chooses the 'About-Us' link, a page will render containing biographical information and furhter explanation about the application.
  9. *STRETCH*: User is given the ability to create a new fact that will be validated and approved by the third party API.
  
 

# Non-Functional Requirements (301 & 401 only)

Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

- Data Integrity
  - Confirm that correct facts provided on the web application. We want to ensure that the user is presented with factual information that can be compared against other resources. If data is outdated we want to be able to update and provide the correct information to users.

- Scalability
  - The web app will have a database capable of hosting multiple users throughout the duration of the apps existence. The data added by the user will not be limited. There will be no cap on how much information the application contains.
