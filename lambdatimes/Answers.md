1.) What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
         Prototypes allow for type checking to ensure that the data that is being passed in is actually what you expected. This is because JavaScript is a loosely types language where you can change variable types easily. Not all programming languages are like this because it can present errors that you never expected when passing data around. PropTypes is like typescript or any strongly based language that is similar javascript but does address and fix the errors with switching datatypes within JavaScript

2.) Describe a life-cycle event in React?. 
        Birth/Mounting, Growth/Updating and Death/Unmounting are all stages of the life-cycle within react. The birthing phase within react is when all of the components are created and the data is created and render is invoked. Within the growth of the react application, the setState is what updates the data from state, and grows the application. The death phase of react deals with componentWillUnmount and removing components from the application

3.) Explain the details of a Higher Order Component?
    A Higher Order Function takes in a component or components as arguments and will return a component based on some logic within the HOC. A higher order function allows for the reuse of component logic. This also stops DRY programming by encapsulating shared logic.

4.) What are three different ways to style components in React? Explain some of the benefits of each.
     Styled components, and separate files(css), and libraries. 

        -Styled components allow you to add your styling within Javascript, some developers like that you can do HTML within JavaScript(JSX) and now styling as well.

        -External CSS files are another way of adding styling to a project, the benefit of adding an external CSS file is that it looks clean and its not crossing paths with other code. It's easy to find and separate from code

        -External Libraries such as React Bootstap allow for even easier styling. Using React strap lets programmers copy and past predetermined styling. adding styling as a prop creates clean code and also requires less code. External libraries usually have great documentation that explains how things are styling and how to insert them within your React code.