import React from 'react';

class Sidebar extends React.Component {
 
    constructor(props) {
      super(props);

      this.state = {
          activeGenderFilter : {},
          activeSpeciesFilter : {},
          sortOrder : 0
      }

      

    }

    handleFilterClick(type,e) {
        let activeSpeciesFilter = {...this.state.activeSpeciesFilter};
        let sortOrder = this.state.sortOrder;
        let activeGenderFilter = {...this.state.activeGenderFilter}

        switch(type) {
            case 'Species' : 
                
                activeSpeciesFilter[e.target.name] = e.target.checked;
                this.setState({
                    activeSpeciesFilter
                })
                break;
            case 'Gender' : 
                activeGenderFilter[e.target.name] = e.target.checked;
                this.setState({
                    activeGenderFilter
                })
                break;
            case 'Sort' : 
                sortOrder = e.target.value
                this.setState({
                    sortOrder : e.target.value
                })
                break;
            default : 
                break;
        }
        this.props.handleFilterClick({activeGenderFilter,activeSpeciesFilter , sortOrder})

    }

    render() {
        return (
            <div >
                <h2 className="padding-10">
                    Filters
                </h2>
                <div className="filterBox">
                    <h3>
                        Species
                    </h3>
                    <p>
                        <label htmlFor="human">Human</label>
                        <input onChange = {this.handleFilterClick.bind(this,'Species')} type="checkbox" name="human" id="human" ></input>
                    </p>
                    <p>
                        <label htmlFor="mythology">Mythology</label>
                        <input onChange = {this.handleFilterClick.bind(this,'Species')} type="checkbox" name="mythology" id="mythology" ></input>
                    </p>
                    <p>
                        <label htmlFor="other">Other</label>
                        <input onChange = {this.handleFilterClick.bind(this,'Species')} type="checkbox" name="other" id="other" ></input>
                    </p>
                </div>

                <div className="filterBox">
                    <h3>
                        Gender
                    </h3>
                    <p>
                        <label htmlFor="male">Male</label>
                        <input onChange = {this.handleFilterClick.bind(this,'Gender')} type="checkbox" name="male" id="male" ></input>
                    </p>
                    <p>
                        <label htmlFor="female">Female</label>
                        <input onChange = {this.handleFilterClick.bind(this,'Gender')} type="checkbox" name="female" id="female" ></input>
                    </p>
                   
                </div>
                <div className="filterBox">
                    <h3 >
                        Sort By Id
                    </h3>
                   
                    <p>
                        <select aria-label='Sort'  name = "sort" onChange={this.handleFilterClick.bind(this,'Sort')}>
                            <option selected = {true} value='0'>None</option>
                            <option  value='-1'>Descending</option>
                            <option  value='1'>Ascending </option>
                        </select>
                    </p>
                   
                </div>
            </div>

        )
    }

}

export default Sidebar;
