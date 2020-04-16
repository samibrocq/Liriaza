 miStorage = window.localStorage;  

var data = {
    Cosecha : {
        harvestYield : ['Rendimiento cosecha' , parseFloat(localStorage.getItem('harvestYield')) || 300 , 'kg/h' ]
    },
    
    Molido : {
        chipperYield :  ['Rendimiento molino', 
                        parseFloat(localStorage.getItem('chipperYield')) || 100,
                        'kg/h'],
        
        manualYield :   ['Rendimiento corte manual',
                        parseFloat(localStorage.getItem('manualYield')) || 60,
                       'kg/h'],
        
        chipSurface :   ['Superficie zona de molido', 
                        parseFloat(localStorage.getItem('chipSurface')) || 5, 
                        'm²'],
        
        chipperPrice :  ['Precio molino', 
                        parseFloat(localStorage.getItem('chipperPrice')) || 100000, 
                        '$MXN'],
        
        chippedWhDens : ['Densidad lirio molido',
                        parseFloat(localStorage.getItem('chippedwhdensity')) || 300, 
                        'kg/m3'],    
    },
    
    Lombricomposta : {
        massLossPrecomp : ['Masa final / Masa inicial precomposteo',
                              parseFloat(localStorage.getItem('massLossPrecomp')) || 0.5,
                           ''],
        
        massLossCompost : ['Masa final / Masa inicial lombri-composteo',
                           parseFloat(localStorage.getItem('massLossCompost')) || 0.3,
                           ''], 
        
        compostDensity : ['Densidad compost húmedo', 
                          parseFloat(localStorage.getItem('compostDensity')) || 600,
                          'kg/m3'],
        hours : {
            
            fillPrecompost :    ['LLenar cajas precompost',
                                parseFloat(localStorage.getItem('fillPrecompost')) || 60,
                                'min/m3'],
            
            movePrecompost :    ['Remover precompost', 
                                parseFloat(localStorage.getItem('movePrecompost')) || 60,
                                'min/m3'],
            
            fillLombricompost : ['Llenar cama lombrices', 
                                parseFloat(localStorage.getItem('fillLombricompost')) || 60, 
                                'min/m3'],
            
            dryLombri :         ['Secar producto', 
                                parseFloat(localStorage.getItem('dryLombri')) ||60,
                                'min/m3'],
            
            cribbleLombri:      ['Tamizar producto', 
                                parseFloat(localStorage.getItem('cribbleLombri')) || 1,
                                'min/kg'],
        },
        prices: {
            preCompostBox : ['Caja de pre-composteo',
                            parseFloat(localStorage.getItem('preCompostBox')) || 400,
                            '$MXN'],
            
            lombriBed :     ['Cama de lombrices',
                            parseFloat(localStorage.getItem('lombriBed')) || 100,
                            '$MXN /m²'],
            
            cribbleLombri:  ['Tamiz',
                            parseFloat(localStorage.getItem('cribbleLombri')) || 400,
                            '$MXN'],
        },
    },
    
    Secado : {
        dryMassLoss: ['Masa final / Masa inicial', 
                     parseFloat(localStorage.getItem('dryMassLoss')) || 0.10, 
                     ''],
        
        whBoardDensity : ['Densidad lirio sobre charolas', 
                          parseFloat(localStorage.getItem('whBoardDensity')) || 5,
                          'kg/m²'],
        hours : {
            
            fillDryer : ['Llenar secador', 
                        parseFloat(localStorage.getItem('fillDryer')) || 100,
                        'kg/h'],
            
            emptyDryer : ['Vaciar secador', 
                         parseFloat(localStorage.getItem('emptyDryer')) || 10,
                         'kg/h'],
        },
        prices : {
            
            house : ['Secador', 
                    parseFloat(localStorage.getItem('house')) || 400,
                    '$MXN/m²'],
            
            grinder : ['Molino fino', 
                      parseFloat(localStorage.getItem('grinder')) || 5000,
                      '$MXN']
        } ,   
    },
    
    Biogás :{
        rhaleCapacity : ['Volumen reactor RHALE',
                        parseFloat(localStorage.getItem('rhaleCapacity')) || 6, 
                        'L/m3 lirio diario'],
        
        uasbCapacity :  ['Volumen reactor UASB', 
                        parseFloat(localStorage.getItem('uasbCapacity')) || 5,
                        'L/m3 lirio diario'],
        
        uasbYield : ['Rendimiento UASB',
                      parseFloat(localStorage.getItem('uasbYield')) || 1,
                     'Lgás/día /Lreactor'],
        
        biogasHeatingCapacity : ['Capacidad calorífica biogás',
                                  parseFloat(localStorage.getItem('biogasHeatingCapacity')) || 6,
                                 'kWh/m3'],
        
        surfaceExtractor : ['Superficie extractor de líquido',
                            parseFloat(localStorage.getItem('surfaceExtractor')) || 5,
                            'm²'],
        hours : {
            
            liquidExtraction : ['Extracción de líquido', 
                               parseFloat(localStorage.getItem('liquidExtraction')) || 100, 
                                'kg/h'],
            
            feedUASB :  ['Alimentar reactor UASB', 
                        parseFloat(localStorage.getItem('feedUASB')) || 0.1,
                        'min/kg'],
            
            feedRHALE : ['Alimentar reactor RHALE', 
                         parseFloat(localStorage.getItem('feedRHALE')) || 0.1,
                         'min/kg'],
        },
        prices : {
            
            liquidExtractor : ['Extractor de líquidos', 
                               parseFloat(localStorage.getItem('liquidExtractor')) || 10000,
                               '$MXN'],
            
            rhale : ['Reactor RHALE',
                     parseFloat(localStorage.getItem('rhale')) || 4000,
                     '$MXN'],
            
            uasb : ['Reactor UASB',
                    parseFloat(localStorage.getItem('uasb')) || 6000,
                    '$MXN'],
            
            tent : ['Carpa', 
                    parseFloat(localStorage.getItem('tent')) || 3000,
                    '$MXN'],
            
            gasBag : ['Bolsa de gás',
                      parseFloat(localStorage.getItem('gasBag')) || 3000,
                      '$MXN'],        
        }   
    },
    
    Compost : {
        
        compostDensity : ['Densidad compost húmedo', 
                          parseFloat(localStorage.getItem('compostDensity')) || 6000,
                          'kg/m3'],
        
        compostMassLoss : ['Masa final / Masa inicial', 
                           parseFloat(localStorage.getItem('compostMassLoss')) || 0.15, 
                            ''], 
        hours : {
                                      
            fillCompostBox : ['LLenar caja de composteo',
                             parseFloat(localStorage.getItem('fillCompostBox')) || 60, 
                              'min/m3'],
            
            moveCompost : ['Remover compost',
                           parseFloat(localStorage.getItem('moveCompost')) || 60,
                           'min/m3'],
            
            dryCompost : ['Secar producto', 
                          parseFloat(localStorage.getItem('dryCompost')) || 60,
                          'min/m3'],
            
            cribbleCompost : ['Tamizar producto', 
                                parseFloat(localStorage.getItem('cribbleCompost')) || 0.5, 
                              'min/kg'],  //mas rapido que lombri porque no gusanos
        },
        prices : {
            compostBox : ['Composteador', 
                         parseFloat(localStorage.getItem('compostBox')) || 400,
                          '$MXN'],
        }
    }
}


/*
var data = {
    Cosecha : {
        harvestYield : ['Rendimiento cosecha' , 300 , 'kg/h' ]
    },
    
    Molido : {
        chipperYield : ['Rendimiento molino', 100, 'kg/h'],
        manualYield : ['Rendimiento corte manual', 60, 'kg/h'],
        surface : ['Superficie zona de molido' , 5, 'm²'],
        price : ['Precio molino', 100000, '$MXN'],
        chippedwhDensity : ['Densidad lirio molido', 300, 'kg/m3'],    
    },
    
    Lombricomposta : {
        massLossPrecompost : ['Masa final / Masa inicial precomposteo', 0.5, ''],
        massLossCompost : ['Masa final / Masa inicial lombri-composteo', 0.3, ''], 
        compostDensity : ['Densidad compost húmedo', 600, 'kg/m3'],
        hours : {
            fillPrecompost : ['LLenar cajas precompost', 60, 'min/m3'],
            movePrecompost : ['Remover precompost', 60, 'min/m3'],
            fillLombricompost : ['Llenar cama lombrices', 60, 'min/m3'],
            dry : ['Secar producto', 60, 'min/m3'],
            cribble: ['Tamizar producto', 1, 'min/kg'],
        },
        prices: {
            preCompostBox : ['Caja de pre-composteo',400, '$MXN'],
            LombriBed : ['Cama de lombrices',100, '$MXN /m²'],
            cribble: ['Tamiz', 400, '$MXN'],
        }
    },
    
    Secado : {
        massLoss: ['Masa final / Masa inicial', 0.10, ''],
        whBoardDensity : ['Densidad lirio sobre charolas', 5, 'kg/m²'],
        hours : {
            fillDryer : ['Llenar secador', 100, 'kg/h'],
            emptyDryer : ['Vaciar secador', 10, 'kg/h'],
        },
        prices : {
            house : ['Secador', 400, '$MXN/m²'],
            grinder : ['Molino fino', 5000,  '$MXN']
        } ,   
    },
    
    Biogás :{
        RhaleCapacity : ['Volumen reactor RHALE', 6, 'L/m3 lirio diario'],
        UasbCapacity : ['Volumen reactor UASB', 5, 'L/m3 lirio diario'],
        UasbYield : ['Rendimiento UASB', 1, 'Lgás/día /Lreactor'],
        biogasHeatingCapacity : ['Capacidad calorífica biogás', 6, 'kWh/m3'],
        surfaceExtractor : ['Superficie extractor de líquido', 5, 'm²'],
        hours : {
            liquidExtraction : ['Extracción de líquido', 100, 'kg/h'],
            feedUASB : ['Alimentar reactor UASB', 0.1, 'min/kg'],
            feedRHALE : ['Alimentar reactor RHALE', 0.1, 'min/kg'],
        },
        prices : {
            liquidExtractor : ['Extractor de líquidos', 10000,'$MXN'],
            rhale : ['Reactor RHALE', 4000, '$MXN'],
            uasb : ['Reactor UASB', 6000, '$MXN'],
            tent : ['Carpa', 3000, '$MXN'],
            gasBag : ['Bolsa de gás', 3000, '$MXN'],        
        }   
    },
    
    Compost : {
        compostDensity : ['Densidad compost húmedo', 6000, 'kg/m3'],
        massLoss : ['Masa final / Masa inicial', 0.15, ''], 
        hours : {
            fillBox : ['LLenar caja de composteo', 60, 'min/m3'],
            moveCompost : ['Remover compost', 60, 'min/m3'],
            dry : ['Secar producto', 60, 'min/m3'],
            cribble : ['Tamizar producto', 0.5, 'min/kg'],  //mas rapido que lombri porque no gusanos
        },
        prices : {
            box : ['Composteador', 400, '$MXN'],
        }
    }
}

*/

/*
var dataHarvest = {
    harvestYield : ['Rendimiento de la cosecha' , 300 , 'kg/h' ]
}

var dataChipping = {
    chipperYield : 100, //kg/h
    manualYield : 60, //kg/h
    surface : 5, //m2
    price : 100000, //$MXN
    chippedwhDensity : 300 //kg/m3 Densidad del lirio molido
}

var dataLombri = {
    massLossPrecompost : 0.5,
    massLossCompost : 0.3,
    compostDensity : 600, //kg/m3
    hours : {
        fillPrecompost : 60, // min/m3
        movePrecompost : 60,//min/m3
        fillLombricompost : 60, //min/m3
        dry : 60, //min/m3
        cribble: 1, //min/kg
    },
    prices: {
        preCompostBox :400, //$MXN
        LombriBed : 100, //MXN/m2
        cribble:400 //MXN
    }  
}


var dataDrying = {
    massLoss:0.10,
    whBoardDensity : 5, //kg/m2
    hours : {
        fillDryer : 100, //kg/hour
        emptyDryer : 10, //kg/h
    },
    invest : {
        house : 400, //$mxn/m2
        grinder : 5000 //$mxn
    }    
}

var dataGas = {
    RhaleCapacity : 6, // L reactor/ m3 lirio procesado diario
    UasbCapacity : 5, // L reactor/ m3 lirio procesado diario
    UasbYield : 1, //kWh diario /L reactor
    biogasHeatingCapacity : 6, //kWh/m3
    surface : {
        extractor : 5 //m2
    },
    hours : {
       liquidExtraction : 100, // kg/h lirio entero
       feedUASB : 0.1, //min/kg
       feedRHALE : 0.1, //min/kg 
    },
    invest : {
        liquidExtractor : 10000, //$SMXN
        rhale : 2000,
        uasb : 4000,
        tent : 3000,
        gasBag : 3000        
    }   
}


var dataCompost = {
    compostDensity : 6000, //kg/m3
    massLoss : 0.15, 
    hours : {
        fillBox : 60, // min/m3
        moveCompost : 60, //min/m3
        dry : 60, //min/m3
        cribble : 0.5, //min/kg   mas rapido que lombri porque no gusanos
    },
    invest : {
        box : 400 // $ MXN
    }
}

*/