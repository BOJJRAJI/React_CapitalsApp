import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  changeCountry = e => {
    this.setState({activeId: e.target.value})
  }

  render() {
    const {activeId} = this.state
    const countryDetails = countryAndCapitalsList.filter(
      item => item.id === activeId,
    )
    const {country} = countryDetails[0]

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              onChange={this.changeCountry}
              id="select"
              className="select-element"
            >
              {countryAndCapitalsList.map(item => (
                <option key={item.id} value={item.id}>
                  {item.capitalDisplayText}
                </option>
              ))}
            </select>
            <span htmlFor="select" className="para">
              is capital of which country?
            </span>
          </div>

          <h1 className="country">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
