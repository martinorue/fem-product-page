# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/martinorue/fem-product-page)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

En este desafío me propuse utilizar Tailwind y TypeScript, que son herramientas en las cuales estoy incursionando recientemente.
La experiencia con Tailwind fue muy satisfactoria y planeo seguir utilizándolo. En TypeScript tengo mis dudas de estar siguiendo las mejores prácticas, pero hice mi mayor esfuerzo para lograrlo y seguiré estudiándolo más a fondo para sacarle todo el provecho posible.

Si bien ya había utilizado Custom Hooks y Context en React para mi solución del [Todo app](https://www.frontendmentor.io/solutions/todo-app-using-react-6CigAWdga5) en esta oportunidad también decidí ponerlos en práctica. Por ejemplo, utilicé Context para el manejo del carrito aunque lo hice más bien pensando a futuro en un aplicación más 'real' donde necesitara ver el carrito desde otras partes de mi aplicación.

En cuanto a los Custom Hooks, implementé uno para las funcionalidades del carrito y otro para poder cerrar el carrito, el menú de navegación y el modal de productos cuando se haga click afuera. Mi idea era no estar repitiendo el código en cada lugar que quisiera implementar esta funcionalidad.

### Built with

- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned



### Continued development

I would like to 

### Useful resources

- [Don't nest `<nav>` inside `<header>`](https://dev.to/masakudamatsu/don-t-nest-nav-inside-header-do-nest-the-hamburger-menu-button-inside-nav-6cp) - I wasn't shure to nest a `<nav>` inside a `<header>` and I found this great article that cleared up my doubts

- [Why You Should STOP Using Google Fonts (And How to Self-Host Your Own Web Fonts)](https://youtu.be/363s_ziVwTg) - I found this great resource while learning about web performance. Here you can understand why you should self-host your web fonts and how to do so

- [Hamburger Menu with a Side of React Hooks and Styled Components](https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/) - I used this tutorial as a guide to create the hamburger menu. Even though I've never used styled-components, it wasn't difficult to figure out what's going on.

- [How to Get the Window’s Width and Height in React](https://codingbeautydev.com/blog/react-get-window-width-height/) - I made use of this `window.innerWidth` property to hide and show the hamburger icon and show navigation items in desktop view

- [Build a Carousel Component like Instagram purely in ReactJS and TailwindCSS](https://www.youtube.com/watch?v=XJSOgV4VELk) - I followed this tutorial to create a carousel without libraries

- [How To Create An Advanced Shopping Cart With React and TypeScript](https://www.youtube.com/watch?v=lATafp15HWA&t=2293s) - I used this tutorial as a guide to applying Context to the shopping cart and thus being able to display the badge indicating the quantity of products in the cart.

- [Modal component](https://headlessui.com/) - I used Headless UI to make the overlay carousel by modifiyng a modal component

## Author

- Website - [Martín Orue](https://martin-orue-portfolio.vercel.app/)
- Frontend Mentor - [@martinorue](https://www.frontendmentor.io/profile/martinorue)