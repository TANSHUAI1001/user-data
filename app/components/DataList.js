import React,{PropTypes} from "react"
import styles from "../css/common.css"
// import { Button } from 'react-bootstrap'

const DataList = ({data}) =>(
    <div>
    <table>
        <tr>
            <th>userId</th>
            <th>userName</th>
            <th>userAge</th>
            <th>userTel</th>
            <th>userType</th>
        </tr>
        {
            
            data.map((value,i) => 
                <tr> 
                    <td>{value.userId}</td> 
                    <td>{value.userName}</td> 
                    <td>{value.userAge}</td> 
                    <td>{value.userTel}</td> 
                    <td>{value.userType}</td> 
                </tr>
            )
        }
    </table>
    {/*<Button bsStyle="primary">BS按钮</Button>*/}
    </div>
)

export default DataList