import React, {Component} from "react";
import countries from '../Assets/countries'
import '../CSS/form.css'

class Form extends Component {
    state = {
        name: "",
        date: "",
        country: "",
        diet: "Select Diet",
        why: "",
        breathe: "",
        marital: "",
        stress: "",
        claustrophobic: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        let {name, date, country, diet, why} = this.state
        let registration = {
            name: name,
            date: date,
            country: country,
            diet: diet,
            why: why
            }
            //event.target.firstName.value = ""
            //event.target.lastName.value = ""
        console.log(registration)
    }

    // defaultDate = () => {
    //     let today = new Date();
    //     let dd = today.getDate();
    //     let mm = today.getMonth()+1; //January is 0!
    //     let yyyy = today.getFullYear();

    //     if(dd<10){
    //         dd='0'+dd;
    //     } 
    //     if(mm<10){
    //         mm='0'+mm;
    //     } 
    
    //     today = yyyy+'-'+mm+'-'+dd;                
    //     debugger
    //     return(today)
        //document.querySelector(".date").defaultValue=today+""
    //

    render () {
        let {name, date, country, diet, why} = this.state 
        let countryList = countries.map( country => {
                return (<option key={country.code} name={country.name} value={country.name}>{country.name}</option>
                )
            })
        return(
            <form onSubmit={this.handleSubmit}> 
                <div>
                    <label> 
                        Name:
                        <input type="text" value={name} name="name" onChange={this.handleChange}/> 
                    </label>
                    <label>
                        Date of Birth:
                        <input className="date" type="date" value={date} name="date" min="1900-01-01" max="2020-12-31" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Country of Origin:
                        <select value={country} name="country" onChange={this.handleChange}>
                            {countryList}
                        </select>
                    </label>
                </div>
                <div>
                    <label> 
                        Dietary Preference:
                        <select value={diet} name="diet" onChange={this.handleChange}>
                            <option disabled>Select Diet</option>
                            <option>Omnivore</option>
                            <option>Vegetarian</option>
                            <option>Vegan</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label> 
                        Why Do You Want to be a Mars Explorer?
                        <input type="text" value={why} name="why" onChange={this.handleChange}/> 
                    </label>
                </div>
                <fieldset>
                    <legend> Can you breathe underwater longer than 1 minute?</legend>
                        <label>
                            Yes:
                            <input type="radio" value="Yes" name="breath"onChange={this.handleChange}/>
                        </label>
                        <label>
                            No:
                            <input type="radio" value="No" name="breath" onChange={this.handleChange}/>
                        </label>
                        <label>
                            I Don't Know:
                            <input type="radio" value="I Don't Know" name="breath" onChange={this.handleChange}/>
                        </label>
                </fieldset>
                <fieldset>
                    <legend>Marital status</legend>
                        <label>
                            Married
                            <input type="radio" value="Married" name="marital" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Unmarried
                            <input type="radio" value="Unmarried" name="marital" onChange={this.handleChange}/>
                        </label>
                </fieldset>
                <fieldset>
                    <legend>When you are in a stressful or difficult situation, how do you most frequently react?</legend>
                        <label>
                            Determination: I continue to confront the situation.
                            <input type="radio" value="Determination" name="stress" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Defeat: I stop confronting the situation.
                            <input type="radio" value="Defeat" name="stress" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Anger: I become upset at the situation.
                            <input type="radio" value="Anger" name="stress" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Resourcefulness: I seek help to confront the situation.
                            <input type="radio" value="Resourcefulness" name="stress" onChange={this.handleChange}/>
                        </label>
                </fieldset>
                <fieldset>
                    <legend>Are You Claustrophobic?</legend>
                        <label>
                            Yes:
                            <input type="radio" value="Yes" name="claustrophobic"onChange={this.handleChange}/>
                        </label>
                        <label>
                            No:
                            <input type="radio" value="No" name="claustrophobic" onChange={this.handleChange}/>
                        </label>
                </fieldset>
                <fieldset>
                    <legend>Does your family have a history of...? Check all that apply:</legend>
                        <label>
                            Cancer
                            <input type="checkbox" value="cancer" name="familymedhistory" checked={cancer} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Heart Disease
                            <input type="checkbox" value="heart-disease" name="familymedhistory" checked={heart-disease} onChange={this.handleChange}/>
                        </label>
                        <label> 
                            Diabetes
                            <input type="checkbox" value="diabetes" name="familymedhistory" checked={diabetes} onChange={this.handleChange}/>
                        </label>
                </fieldset>
                <fieldset>
                    <legend>Do you have any living...? Check all that apply:</legend>
                        <label>
                            Siblings
                            <input type="checkbox" value="siblings" name="livingfamily" checked={siblings} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Parents
                            <input type="checkbox" value="parents" name="ivingfamily" checked={parents} onChange={this.handleChange}/>Parents
                        </label>
                        <label>
                            Grandparents
                            <input type="checkbox" value="grandparents" name="ivingfamily" checked={grandparents} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Number of Living Relatives
                            <input type="number" value="0" name="livingfamily" hidden="true" onChange={this.handleChange}/>
                        </label>
                </fieldset>
                <fieldset>
                    <legend>Check all educational credentials you have received:</legend>
                        <label>
                        High School or GED
                        </label>
                            <input type="checkbox" value="HSGED" name="education" checked={hsged} onChange={this.handleChange}/>
                        <label>
                            Associate's Degree
                            <input type="checkbox" value="Associate'sDegree" name="education" checked={associatedegree} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Bachelor's Degree
                            <input type="checkbox" value="Bachelor'sDegree" name="education" checked={bachelordegree} nChange={this.handleChange}/>
                        </label>
                        <label>
                            Master's Degree
                            <input type="checkbox" value="Master'sDegree" name="education" checked={masterdegree} nChange={this.handleChange}/>
                        </label>
                        <label>
                            PhD
                            <input type="checkbox" value="PhD" name="education" checked={phd} onChange={this.handleChange}/>
                        </label>
                        <div>
                            <label>
                                Other
                                <input type="checkbox" value="Other" name="education" checked={otherEducation} onChange={this.handleChange}/>
                            </label>
                            <input type="text" value="" name="education" placeholder="If Other, Please Specify" hidden="true" onChange={this.handleChange}/>
                        </div>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        )
    }


}


// defaultValue={this.defaultDate()}


export default Form




// var otherCheckbox = document.querySelector('input[value="other"]');
// var otherText = document.querySelector('input[id="otherValue"]');
// otherText.style.visibility = 'hidden';

// otherCheckbox.addEventListener('change', () => {
//   if(otherCheckbox.checked) {
//     otherText.style.visibility = 'visible';
//     otherText.value = '';
//   } else {
//     otherText.style.visibility = 'hidden';
//   }
// };