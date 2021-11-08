// chapter 21 - 25

// 1.
// var fname=prompt("Enter your first name")
// var lname = prompt("Enter your last name")
// var fullName=fname+lname;
// alert("Welcome Mr "+fullName)

// 2.

// var fav = prompt("Enter your favourite mobile name")
// document.write("My favourite phone is:",fav,"<br>")
// document.write("Length of string: "fav.length)

// 3.
// var a = "pakistan";
// var b = prompt("Enter the letter of word pakistan to find its index")
// for (i = 0; i <= a.length; i++) {
//     if (b == a[i]) {
//         document.write("index of ", b, " is ", i)
//     }

// }

// 4.
// var a ="hello world"
// var b = a.lastIndexOf("l")
// document.write("String: ",a,"<br>")
// document.write("last in of 'l': ",b)

// 5.
// var a = "pakistan"
// var b =a[3]
// document.write("String: ",a,"<br>")
// document.write("Character at index 3: ",b)

// 6.

// var fname=prompt("Enter your first name")
// var lname = prompt("Enter your last name")
// var fullName= concat(fname,lname);
// alert("Welcome Mr "+fullName)

// 7.

// var a= "Hyderabad"
// var b = a.replace("Hyder","Islam")
// document.write("City: ",a,"<br>")
// document.write("After replacement: ",b)

// 8.

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep = message.replace("and","&")
// var rep1=rep.replace("and","&")
// console.log(rep1)

// 9.
// var a ="472"
// var b =parseInt(a)
// document.write("value: ",a,"<br>","type: ",typeof(a),"<br>Value: ",b,"<br>Type: ",typeof(b))

// 10.

// var a = prompt("Enter you name")
// var b = a.toUpperCase()
// alert("user input: "+a+"\nUpper case: "+b)

// 11.

// var a = "javascript"
// var b = a.slice(0,1)
// var c = b.toUpperCase()
// var d = a.slice(1,a.length)
// var e = c+d
// alert("User input: "+a+"\nTitle Case: "+e)

// 12.

// var num =35.36;
// var num1 = num.toString().replace(".","")
// alert("Number:"+num+"\nResult: "+num1)

// 13.
// var b=1;
// var pass =prompt("Enter user name")
// var pass1 = pass.charCodeAt()
// console.log(pass1)

// for(i=0;i<=pass.length;i++)
// {
//     b++;
//     if(pass[i].charCodeAt()==33)
//     {
//         alert("Please enter valid username")
//     }
//     else if(pass[i].charCodeAt()==44)
//     {
//         alert("Please enter valid username")
//     }
//     else if(pass[i].charCodeAt()==46)
//     {
//         alert("Please enter valid username")
//     }
//     else if(pass[i].charCodeAt()==46)
//     {
//         alert("Please enter valid username")
//     }
//     else if(pass[i].charCodeAt()==64)
//     {
//         alert("Please enter valid username")
//     }
//     else if((i+=1)==(pass.length))
//     {
//         alert("welcome")
//     }
// }   

// 14.


// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var b = prompt("serch items")
// var c= b.toLowerCase()
// for (i=0;i<A.length;i++)
// {
//     if(c==A[i])
//     {
//         alert(b+" is available at index "+i+" in our bakkery")
//     }
//     else if (A.indexOf(c)==-1)
//     {
//         alert("We are sorry. "+b+" is not available in our bakery")
//         break;
//     }
// }

// 15.

// var pass = prompt("Enter new Password\ntips for Setting password\nIt should contain alphabets and numbers\nIt should not start with a number\nIt must at least 6 characters long")
// for(i=0;i<pass.length;i++)
// {
//     if(!/^[a-zA-Z0-9]{0,16}$/.test(pass))
//     {
//         alert("please complete requirment and try again")
//         break;
//     }
//     else if(pass.length<6 || pass.length>16)
//     {
//         alert("Your password must contain 6 to 16 latters")
//         break;
//     }
//     else if(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pass))
//     {
//         alert("Password reset completed\nthanks")
//         break;
//     }
// }

// 16.

// var university = "University of Karachi";
// var a = university.split("")
// for(i=0;i<a.length;i++)
// {
//     document.write(a[i],"<br>")
// }

// 17.
// var b =1;
// var user = prompt("Please enter any word")
// document.write("user input: ",user,"<br>")
// for(i=1;i<=user.length;i++)
// {
// b++;
//     if(b==user.length)
//     {
//         document.write("Last character of input: ",user[i])
//     }
// }

// 18.

// var a = "the quick brown fox jumps over the lazy dog";
// var b = a.split(" ")
// var c = 0;

// for (i = 0; i < b.length; i++) {
//     if (b[i] == "the") {
//         c++;

//     }
// }
// document.write("text: ",a,"<br>","There are ",c," occurrence of word 'the'")

