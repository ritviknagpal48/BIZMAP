import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';

class UserDetailSetOne extends Component {
    continue = (e) => {
        e.preventDefault();
        // Form Validation

        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="modal-body" style={styles.modal_body}>
                        <h4 className="display-7">Detail Set One</h4>
                        <TextField id="standard-basic" label="Field One" onChange={handleChange('field_one')}
                            defaultValue={values.field_one}
                            style={styles.text_field}/>
                        <br />
                        <TextField id="standard-basic" label="Field Two" onChange={handleChange('field_two')}
                            defaultValue={values.field_two}
                            style={styles.text_field}/>
                        <br />
                        <TextField id="standard-basic" label="Field Three" onChange={handleChange('field_three')}
                            defaultValue={values.field_three}
                            style={styles.text_field}/>
                        <br />
                        <TextField id="standard-basic" label="Field Four" onChange={handleChange('field_four')}
                            defaultValue={values.field_four}
                            style={styles.text_field}/>
                        <br />
                    </div>
                    <div className="modal-footer">
                            <Button variant="contained"
                                color="primary"
                                style={styles.button}
                                onClick={this.continue}
                            >Continue</Button>
                    </div>  
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button : {
        margin:15
    },
    text_field : {
        width:'85%',
        margin:10
    },
    modal_body : {
        textAlign:'center'
    }
}


export default UserDetailSetOne
