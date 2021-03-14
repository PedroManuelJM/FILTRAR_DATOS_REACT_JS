import React, { Component } from 'react';
import { LocalData } from './dataLocal';
import './App.css';
import github from './assets/image/github.png';
export default class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
          // categoriaElegida: this.props.match.params.id ,
          listaAviso: [], // arreglo para guardar la lista

      }
      console.log("CONSTRUCTOR")

      //this.obtenerAvisoSolo = this.obtenerAvisoSolo.bind(this);
  }

  componentDidMount() {
      this.setState({
          listaAviso: LocalData, // lista == dataLocal
      })
      console.log(LocalData)
  }

  dibujarAviso(datosAviso) {

      return (      
      <>
              {datosAviso.filter(itemAviso=>
                  itemAviso.curso == 'Angular').map(filteredAviso => (
                     <div className="row" key={filteredAviso.id}>    
                          <div className="col">
                              <div>
                                <h4 id="tit-blog" >{filteredAviso.titulo}
                                <span className=
                                      {` 
                                      ${filteredAviso .curso === "React" ? 'badge badge-pill badge-info float-right tit-bad' : ''}
                                      ${filteredAviso .curso  === "Angular" ? 'badge badge-pill badge-danger float-right tit-bad' : ''}
                                      `}
                              >&nbsp;&nbsp;&nbsp;{filteredAviso .curso}&nbsp;&nbsp;&nbsp;</span>
                                
                                </h4> 
                                <span className="text-muted float-right">&nbsp;&nbsp;<b>&nbsp;&nbsp;{filteredAviso.fecha}</b></span>
                              </div>
                              <img src={'../img/'+filteredAviso.foto} className="img-fluid rounded"  width="100%"/>
                              <br></br><br></br>
                              <p>
                                  {filteredAviso .subtitulo}
                              </p>   
                          </div>
                     </div>            
                  ))}
        </>
      )
  }

  dibujarAviso2(datosAviso) {

    return (      
    <>
     
          <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect02"  value={this.state.buscar}  onChange={(e) => this.setState({ buscar: e.target.value })}>
              <option selected>Seleccione la opción</option>
              <option value="Angular">Angular</option>
              <option value="React">React</option>
              <option value="Hacking">Hacking</option>

            </select>
            <div class="input-group-append">
              <label class="input-group-text" for="inputGroupSelect02">Filtrar</label>
            </div>
          </div>
            {datosAviso.filter(itemAviso=>
                itemAviso.curso == this.state.buscar).map(filteredAviso => (
                   <div className="row" key={filteredAviso.id}>    
                        <div className="col">
                            <div>
                              <h4 id="tit-blog" >{filteredAviso.titulo}
                              <span className=
                                    {` 
                                    ${filteredAviso .curso === "React" ? 'badge badge-pill badge-info float-right tit-bad' : ''}
                                    ${filteredAviso .curso  === "Angular" ? 'badge badge-pill badge-danger float-right tit-bad' : ''}
                                    `}
                            >&nbsp;&nbsp;&nbsp;{filteredAviso .curso}&nbsp;&nbsp;&nbsp;</span>
                              
                              </h4> 
                              <span className="text-muted float-right">&nbsp;&nbsp;<b>&nbsp;&nbsp;{filteredAviso.fecha}</b></span>
                            </div>
                            <img src={'../img/'+filteredAviso.foto} className="img-fluid rounded"  width="100%"/>
                            <br></br><br></br>
                            <p>
                                {filteredAviso .subtitulo}
                            </p>   
                        </div>
                   </div>            
                ))}
      </>
    )
}
  render() {
 
     let contenido =this.dibujarAviso(this.state.listaAviso);
     let contenido2 =this.dibujarAviso2(this.state.listaAviso);
      return (
          <>
            <div id="head" className="container-fluid">
                <div className="row">
                    <div  className="col-md-8">
                      <h3 className="text-center text-white">FILTER CON .MAP</h3>
                    </div>
                    <div className="col-md-4">           
                        <h5 className="float-right text-dark" style={{marginTop:"5px"}}>PedroManuelJM&nbsp;&nbsp;
                                    <a  href="https://github.com/PedroManuelJM" target="_blank">
                                      <img  src={github}  style={{marginRight:"20px"}}width="9%"/>
                                    </a>
                        </h5>        
                    </div>
                   
                </div>
             </div>
             <div className="container" style={{marginTop:"20px"}}>
                <div className="row">
                    <div className="col-md-6">
                       {contenido}
                    </div>
                    <div className="col-md-6">
                       {contenido2}
                    </div>
                </div> 
             </div>

           
          </>

      );
  }
}