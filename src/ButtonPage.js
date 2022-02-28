import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export function Login() {
    const navigate = useNavigate()

    const toNaviagate = () => navigate('/practice')
    const toThankyou = () => navigate('/thankyou')
    const toTernaryOperator = () => navigate('/ternary')
    const toArrayMap = () => navigate('/arraymap')
    const toSpreadOperator=()=>navigate('/sprdop')
    return (
        <div>
            <form>
                <h4>Login Form</h4><br />
                name <input type="text" /><br />
                password <input type="text" /><br /><br />
                <button onClick={toNaviagate}>Login</button><br />
                <button type='button' onClick={toThankyou}>Back</button><br />
                <Link to="/practice">go to practice</Link><br />
                <Link to="/parent-child">parent-child example</Link><br />
                <Link to="/if-condition">If-condition</Link><br />
                <button type='button' onClick={toTernaryOperator}>Ternary Operator</button><br />
                <Link to='/arraydes1'>Array Destrctn1</Link><br />
                <Link to='/mathoperations'>Math Operations</Link><br />
                <button type='button' onClick={toArrayMap}>array map</button><br />
                <Link to='/objfun'>ObjFunction</Link><br />
                <button type='button' onClick={toSpreadOperator}>Spread Operator</button>
                <Link to='/reactclass'>React Class Example</Link><br />
                <Link to='/reactprops'>React Properties</Link><br />
                <Link to='/property2'>property passing</Link><br />
                <Link to='/property3'>property as an object</Link>

            </form>
        </div>
    )
}

export function Practice() {
    return (
        <div>
            <h1>This is my practice page</h1>
            <ul>
                <li>Working as SD</li>
                <li>Sd in Innovature</li>
                <li>kakkanad kochi</li>
            </ul>
        </div>
    )
}

function Parent() {
    return (
        <div>
            <h3>This is the parent component...component1</h3>
        </div>
    )
}
export default Parent

export function Child() {
    return (
        <div>
            <p>This is the child component..component 2</p>
            <Parent />
        </div>
    )

}

export function ThankYou() {
    return (
        <div>
            <h2>Thank You</h2>
        </div>
    )
}

export function IfCondition() {
    const x = 5;
    let name1 = "Name1"
    if (x < 10) {
        name1 = "X is less than 10"
    }
    return (
        <h3>{name1}</h3>
    )
}

export function IfCondition2() {
    const x = 30;
    return (
        <h5>{(x < 10 ? "X is less than 10" : "X is greater than 10")}</h5>
    )
}

export function ArrayMap() {
    const myArray = ['appple', 'banana', 'grapes'];
    const myList = myArray.map((items => <p>{items}</p>))
    return myList;
}

export function ArrayDesrtuction1() {
    const vehicle = ['jeep', 'bus', 'car', 'suv'];
    // const [v1,v2,v3,v4]=vehicle;
    const [v1, , v3, ,] = vehicle
    // const vehicle2=vehicle
    // return vehicle2
    // return vehicle2[3]
    return [v1, v3]

}

export function MathOperations(num1, num2) {
    return "sorry errorr..."


    // const add=num1+num2;
    // const subtract=num1-num2;
    // const mult=num1*num2;
    // const div=num1/num2;

    // const [add,subtract,mult,div]= MathOperations(2,2); 

    // return (
    // <div>
    //     <p>Sum is {add}</p>
    // </div>
    // ) 
}

export function ObjectInsideFunction() {
    return " sorrry..error..."
//     const vehicle = {
//         brand: 'Ford',
//         model: 'Mustang',
//         type: 'car',
//         year: 2021,
//         color: 'red'
//     }
//     MyVehicle(vehicle);
//    function MyVehicle({ type, brand, model }) {
//         const message = "my model is " + model + "and brand is " + brand + " and type is " + type
//     }
// return(
//     {MyVehicle}
//     <MyVehicle/>
   
// )
      

}

export function SpreadOperator1(){
    const array1=['appple', 'banana', 'grapes'];
    const array2=[1,2,3,4];
    const array3=[1,2,3,4,5,6,7,8,9,10]
    const combined=[...array1,...array2];
    const [first,sec,...rest]=array3
    return(
        <div>
<p>{combined}</p>
<br />
<p>{[first,sec,...rest]}</p>
        </div>
        )
}

export class Car extends React.Component{
    constructor(){
        super();
        this.state={color:'red'}
    }
    render(){
        return(
            <h1>my car is {this.state.color}</h1>
        )
    }
}

export class ReactProps extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
        }
    }
        ChangeColor=()=>{
            this.setState({color:'blue'})
        }
        render(){
            return(
                <div>
                    <p>old color is <b>{this.state.color}</b></p><br />
                    <button type='button' onClick={this.ChangeColor}>Change Color</button>
                </div>
            )
        }
}

export function Property2(props){
    return (
        <h3>My color is {props.color}</h3>
    )
}
export function Property2a(){
    const carColor='yellow'
    return(
        <div>
<h2>This is from property3</h2>
<Property2 color={carColor}/>
<h4>Now the car color is {carColor}</h4>
        </div>
     )
}

export function Property3(props){
    return(
        <h2>car model from property3 is {props.brand.model}</h2>
    )
}
export function Property3a(){
    const carObj={name:'Ford',color:'blue',model:"swift"}
    return(
        <div>
            <Property3 brand={carObj}/>
            <h3>My car proreties from property3a are {carObj}</h3>
        </div>
    )
}


























// export default function Button(){
//     return (
//         <div>
//             <button>SignIn</button>
//         </div>
//     )
// }


// export default class Button extends React.Component{
//     render(){
//         return (
//             <div>helloo</div>
//         )
//     }
// }