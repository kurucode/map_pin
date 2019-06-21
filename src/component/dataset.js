
import React, {Component} from 'react'

// load external components
import  Dropzone from 'react-dropzone'
//import treeview
import SortableTree from "react-sortable-tree";
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';
import readXlsxFile from 'read-excel-file'
// load actions
import {loadExcel} from '../actions'
// load style
import './component.css'
import 'react-sortable-tree/style.css'

class DataSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: [{ title: 'Chicken', children: [{ title: 'Egg' }] }]
        }
    }
    
    render() {
        const {dispatch, markers} = this.props

        return(
        <div className="dataset_body">
            
            <h3>Your DataSet</h3>
            <div className="dropzone">
                <Dropzone onDrop={
                    acceptedFiles => {
                        acceptedFiles.forEach(file =>
                            readXlsxFile(file).then((rows) => {
                                let dataset = [];
                                rows.forEach((row, i ) => {
                                    
                                    if( i ===0 )
                                        return;
                                    var lat = row[3];
                                    var lng = row[4];
                                    var title = row[1] + " " + lat + " " + lng;
                                    var data = {
                                        title: title,
                                        name: title,
                                        position: { lat, lng }
                                    }
                                    dataset.push(data)
                                })
                                this.setState({
                                    treeData: dataset
                                })
                                dispatch(loadExcel(dataset))
                            })
                        )
                    }
                }>
                    {({getRootProps, getInputProps}) => (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag & Drop or Click to upload the Excel(*.xlsx|*.xls) Files</p>
                        </div>
                    )}
                </Dropzone>
            </div>
            <div className="dataset">
                <b>Current DataSet</b>
                <div style={{ height: 400 }}>
                    <SortableTree
                    treeData= {markers}
                    
                    theme={FileExplorerTheme}
                    ></SortableTree>
                </div>
                

                
            </div>
        </div>
        )
    }
}

export default DataSet;