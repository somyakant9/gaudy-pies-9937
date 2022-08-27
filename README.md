1.This is an Individual Project done by me in 4 days. 
My project was to clone the website of [FaFetch.com](https://www.farfetch.com/in/shopping/men/items.aspx).Farfetch is a British-Portuguese online luxury fashion retail platform that sells products from over 700 boutiques and brands from around the world.
I created a basic flow of the website.
The pages I have show are:-
 1.Men's Page
 2.Men's Product Page
 3.Cart page
 4.Checkout,payment and confirmation page.
 5.Login Page.

I have used [Reqres Api](https://reqres.in/) for the functionality of login page.
The Landing page is the Men's Page, where you can see the best products and different product shown.
In the Navbar section you can click on the Login button which will open a modal for which I have used [chakra-ui](https://chakra-ui.com/) for the designing of the modal.
Where you can use UserName as - "eve.holt@reqres.in" and password as -"cityslicka" to login in the page.
If you enter any wrong information in Login page in it will not show you loggged in.

Then clicking on the 1st div on men's page you will redirected to the Men's Product Page where you can different products shown.
I have shown filtering functionality on the right side where you can filter based on color, brands, etc. At a time you can filter the products based on one selected filtering option.
You can Sort the product based on the Price low to high and Price high to low.
Then on ever product one button is there which you can use to add the product to the cart.

The cart page can be accessed by the individual if only he is only logged in, for that I have used Private Route which allows to make the cart page accessed by only logged in individual.

In the Cart page you can find the products you added. I have provided a functionality to remove the products from the cartpage.
In the further page you just have to add the details like in Checkout page you have to add your delivery address and click on the payment and It will redirect to you the payment page and there you can add your Card details and confirm it will show you the confirmation Page. After 5 seconds it will redirect you the homepage i.e Men's Page.


