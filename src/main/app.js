import React  from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {changeValue} from '../store/actions'

const Field = props =>
        <div>
            <h1>{props.value}</h1>
            <br/>
            <input onChange={props.changeValue}></input>
        
        </div>


const mapStateToProps = state => ({
  value : state.field.value
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({changeValue}, dispatch);

export default connect( mapStateToProps, mapDispatchToProps)(Field)