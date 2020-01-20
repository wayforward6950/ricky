import React from 'react';
import axios from 'axios'
import CharacterCard from './characterCard'
class Characters extends React.Component {
 
    constructor(props) {
      super(props);

      this.state = {
        characters : [],
        filters : {}
      }


    }

    static getDerivedStateFromProps(props, state) {
        return {filters : props.activeFilters}
    }




    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/character/').then(data => {
            this.setState({
                characters : data.data.results
            })
        })
    }

    getFilteredData(data,filters) {
        if(filters.sortOrder !== '0') {
            data.sort((a,b) => filters.sortOrder === '1' ? a.id-b.id : b.id-a.id)
        }
        if(filters.activeGenderFilter ) {
            let activeGender = Object.keys(filters.activeGenderFilter)
            .filter(key => filters.activeGenderFilter[key])
            .map(item => item.toLowerCase())

            if(activeGender && activeGender.length > 0) {
                data = data.filter(item => activeGender.includes(item.gender.toLowerCase()))

            }

        }


        if(filters.activeSpeciesFilter ) {
            let activeSpecies = Object.keys(filters.activeSpeciesFilter)
            .filter(key => filters.activeSpeciesFilter[key])
            .map(item => item.toLowerCase())

            if(activeSpecies && activeSpecies.length > 0) {
                data = data.filter(item => activeSpecies.includes(item.species.toLowerCase()))

            }

        }
        return data
    }


    render() {
        return (
            <div className="characters-container" >
              {
                  this.getFilteredData(this.state.characters,this.state.filters).map(character => (
                      <CharacterCard data={character} key={character.id} ></CharacterCard>
                  ))
              }
            </div>

        )
    }

}

export default Characters;
