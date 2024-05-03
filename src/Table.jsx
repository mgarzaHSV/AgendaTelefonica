import { data } from './assets/Data.js';
import {useState} from 'react';

export function Table(){
    const [nameInput, setName] = useState('');
    const [departmentInput, setDepartment] = useState('');
    const [extensionInput, setExtension] = useState('');
    const [emailInput, setEmail] = useState('');

    let informationShowed = data.filter(
        person => {
            return (person.name).toLowerCase().includes(nameInput.toLowerCase()) 
            && (person.department).toLowerCase().includes(departmentInput.toLowerCase())
            && (person.extension).toLowerCase().startsWith(extensionInput.toLowerCase())
            && (person.email).toLowerCase().startsWith(emailInput.toLowerCase());
        });

    return(
        <main>
             <section>
            <div className="nombre">
                <label htmlFor="nombreEmpleado">Nombre:</label>
                <input onChange={(e) => {
                    if(e.target.value.length === 0 || e.target.value.length > 1){
                        setName(e.target.value)
                    }
                    }} type="text" name="nombreEmpleado" id="nomEmp"/>
            </div>
            <div className="departamento">
                <label htmlFor="nombreDepartamento">Departamento:</label>
                <input onChange={(e) => setDepartment(e.target.value)} type="text" name="nombreDepartamento" id="nomDpt"/>
            </div>
            <div className="extension">
                <label htmlFor="extension">Extension:</label>
                <input onChange={(e) => setExtension(e.target.value)} type="text" name="extension" id="numExt"/>
            </div>
            <div className="email">
                <label htmlFor="email">Correo Electronico:</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email"/>
            </div>
        </section>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Departamento</th>
                        <th>Extension</th>
                        <th>Celular</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {informationShowed.map((element) => {
                        return <tr key={element.extension}>
                            <td>{element.name}</td>
                            <td>{element.department}</td>
                            <td>{element.extension}</td>
                            <td>{element.phone}</td>
                            <td>{element.email}</td>
                        </tr> })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>{informationShowed.length}</td>
                    </tr>
                </tfoot>
            </table>
        </main>
        
    )
}