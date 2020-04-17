 miStorage = window.localStorage;  

var data = {
    Cosecha : {
        harvestYield : ['Rendimiento cosecha' , 
                        parseFloat(localStorage.getItem('harvestYield')) || 300 ,
                        'kg/h' ]
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
        
        precompostDensity : ['Densidad pre-compost húmedo', 
                          parseFloat(localStorage.getItem('precompostDensity')) || 600,
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
            
            cribblerLombri:  ['Tamiz',
                            parseFloat(localStorage.getItem('cribblerLombri')) || 400,
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

