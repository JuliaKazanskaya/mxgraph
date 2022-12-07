import './index.css';

const $ = require('jquery');

let dic = {
    "MAT-bb1cd349-fd8d-474e-9529-7facedb48f7f": {
        "ProductName": "Material Stream", "custom_name": "23", "connections": {}, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 527.1444808219956, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 101325, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 661.5163243448192, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 31.304049575099455, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 1.3540153700750508, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": 8247.253939881517, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": 22.167537702955656, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 1, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "MAT-16efba18-2884-436a-8673-0c72c3d89d47": {
        "ProductName": "Material Stream", "custom_name": "Product", "connections": {}, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 527.1444808219956, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 101325, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 2838.483675655181, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 14.576839968060801, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 0.6305019839854356, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": 23894.24783435219, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": 58.24713712408873, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 1, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "EN-05c3e9ac-15ca-47f8-85cb-52c457612f3d": {
        "ProductName": "Energy Stream", "custom_name": "24", "connections": {}, "properties": {
            "PROP_ES_0": {
                "name": "Power", "value": 5.684341886080802e-14, "unit": "kW", "editable": true
            }
        }, "additional_properties": {}
    }, "MAT-fbe37236-421f-452e-a5db-792b8ee83d2f": {
        "ProductName": "Material Stream", "custom_name": "19", "connections": {}, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 527.1444808219956, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 101325, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": -1.5543122344752186e-12, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": "inf", "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 0, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": 0, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": 0, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 0.779843920334045, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "MAT-e2ce99a3-6d92-4065-9a5d-cfb50ea1fa48": {
        "ProductName": "Material Stream", "custom_name": "18", "connections": {
            "Out": "CS-b9dca66c-aba8-4616-8dc6-ad25ed843f02"
        }, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 527.1444808219956, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 101325, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 3500.0000000000005, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 45.88088954316026, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 1.9845173540604866, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": 13218.46806087986, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": 59.23333869621561, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 1, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "MIST-ad767381-40b2-4d1c-a6bf-04c44ab09ec1": {
        "ProductName": "Stream Mixer", "custom_name": "14", "connections": {
            "Out": "MAT-0d3c3b31-5f8f-44f8-ba36-0c1a6ecdfc15"
        }, "properties": {}, "additional_properties": {}
    }, "RC-313e4b82-b32d-4950-9188-44af434d51c8": {
        "ProductName": "Conversion Reactor", "custom_name": "Reactor", "connections": {
            "Out": "MAT-e2ce99a3-6d92-4065-9a5d-cfb50ea1fa48",
            "Out1": "MAT-fbe37236-421f-452e-a5db-792b8ee83d2f",
            "Out2": "EN-3fbeb6e1-28ea-4b30-88f8-b500969890d3"
        }, "properties": {
            "Operating Pressure (Dynamics)": {
                "name": "Operating Pressure (Dynamics)", "value": 0, "unit": "atm", "editable": true
            }, "Liquid Level": {
                "name": "Liquid Level", "value": 0, "unit": "m", "editable": true
            }, "Volume": {
                "name": "Volume", "value": 1, "unit": "m3", "editable": true
            }, "Height": {
                "name": "Height", "value": 2, "unit": "m", "editable": true
            }, "Minimum Pressure": {
                "name": "Minimum Pressure", "value": 101325, "unit": "atm", "editable": true
            }, "Initialize using Inlet Stream": {
                "name": "Initialize using Inlet Stream", "value": 0, "unit": "", "editable": true
            }, "Reset Contents": {
                "name": "Reset Contents", "value": 0, "unit": "", "editable": true
            }, "PROP_CR_0": {
                "name": "Pressure Drop", "value": 0, "unit": "Pa", "editable": true
            }, "dehydr: Extent": {
                "name": "dehydr: Extent", "value": 87.14448082199556, "unit": "%", "editable": true
            }, "N-butane: Conversion": {
                "name": "N-butane: Conversion", "value": 87.14448082199556, "unit": "%", "editable": true
            }, "1,3-butadiene: Conversion": {
                "name": "1,3-butadiene: Conversion", "value": "inf", "unit": "%", "editable": true
            }, "Hydrogen: Conversion": {
                "name": "Hydrogen: Conversion", "value": "inf", "unit": "%", "editable": true
            }, "Carbon dioxide: Conversion": {
                "name": "Carbon dioxide: Conversion", "value": 0, "unit": "%", "editable": true
            }, "Water: Conversion": {
                "name": "Water: Conversion", "value": 0, "unit": "%", "editable": true
            }
        }, "additional_properties": {
            "Conversions": {
                "a22afa77-fa4a-4419-b191-446404bd12dc": 0.8714448082199556
            }
        }
    }, "CS-b9dca66c-aba8-4616-8dc6-ad25ed843f02": {
        "ProductName": "Compound Separator", "custom_name": "20", "connections": {
            "Out": "EN-05c3e9ac-15ca-47f8-85cb-52c457612f3d",
            "Out1": "MAT-bb1cd349-fd8d-474e-9529-7facedb48f7f",
            "Out2": "MAT-16efba18-2884-436a-8673-0c72c3d89d47"
        }, "properties": {}, "additional_properties": {}
    }, "EN-3fbeb6e1-28ea-4b30-88f8-b500969890d3": {
        "ProductName": "Energy Stream", "custom_name": "16", "connections": {}, "properties": {
            "PROP_ES_0": {
                "name": "Power", "value": -3540.616197291388, "unit": "kW", "editable": true
            }
        }, "additional_properties": {}
    }, "MAT-0d3c3b31-5f8f-44f8-ba36-0c1a6ecdfc15": {
        "ProductName": "Material Stream", "custom_name": "Butane_in", "connections": {
            "Out": "RC-313e4b82-b32d-4950-9188-44af434d51c8"
        }, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 527.1444808219956, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 101325, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 3499.9999999999986, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 16.727209607038652, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 0.7235133860896152, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": 29404.40067337916, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": 71.76954428110484, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 1, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "MAT-e4e5b197-368a-459f-83b3-9abc8fc51165": {
        "ProductName": "Material Stream", "custom_name": "Feed", "connections": {
            "Out": "DIV-a7f55a57-3eed-45c8-bab5-372bd3e5a99d"
        }, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 373.15, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 101325, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 3499.999999999999, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 16.727209607038652, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 0.5121537450194902, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": 8300.738331930228, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": 24.755810579276876, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 1, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "DIV-a7f55a57-3eed-45c8-bab5-372bd3e5a99d": {
        "ProductName": "Stream Splitter", "custom_name": "Splitter", "connections": {
            "Out": "MAT-50f81cc6-9095-40d4-908c-8905bc44ef92", "Out1": "MAT-42fcc1ee-74aa-4d9c-a150-a85da87d4307"
        }, "properties": {
            "PROP_SP_1": {
                "name": "PROP_SP_1", "value": 0, "unit": "", "editable": true
            }, "PROP_SP_2": {
                "name": "PROP_SP_2", "value": 0, "unit": "", "editable": true
            }, "SR1": {
                "name": "SR1", "value": 0.55, "unit": "", "editable": true
            }, "SR2": {
                "name": "SR2", "value": 0.44999999999999996, "unit": "", "editable": true
            }
        }, "additional_properties": {
            "Ratios": [0.55, 0.44999999999999996, 0]
        }
    }, "MAT-df3bf898-ed79-48e2-83fb-4682b34cab91": {
        "ProductName": "Material Stream", "custom_name": "Steam2_out", "connections": {}, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 522.5438819454105, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 5066250, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 5000.000000000004, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 77.09504869693338, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 0.0017328718670194694, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": -23345.02230299851, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": -72.71750165140155, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 0, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "HE-bc25b603-c563-43df-a994-71b952e04b1f": {
        "ProductName": "Heat Exchanger", "custom_name": "13", "connections": {
            "Out": "MAT-df3bf898-ed79-48e2-83fb-4682b34cab91", "Out1": "MAT-568706eb-f28b-405b-9545-faf96e3b8751"
        }, "properties": {
            "PROP_HX_0": {
                "name": "Global Heat Transfer Coefficient (U)", "value": 100, "unit": "W/[m2.K]", "editable": true
            }, "PROP_HX_1": {
                "name": "Heat Exchange Area (A)", "value": 30, "unit": "m2", "editable": true
            }, "PROP_HX_2": {
                "name": "Heat Load", "value": 158.75526304262596, "unit": "kW", "editable": true
            }
        }, "additional_properties": {}
    }, "MAT-fc33c28b-5a0e-4ee6-bbcb-438b164ca35f": {
        "ProductName": "Material Stream", "custom_name": "Steam2_in", "connections": {
            "Out": "HE-bc25b603-c563-43df-a994-71b952e04b1f"
        }, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 537.9722140086598, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 5066250, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 5000.000000000004, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 77.09504869693338, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 0.001787594586189758, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": -21285.807560031182, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": -67.17021426933591, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 0, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "MAT-50f81cc6-9095-40d4-908c-8905bc44ef92": {
        "ProductName": "Material Stream", "custom_name": "8", "connections": {
            "Out": "HE-bc25b603-c563-43df-a994-71b952e04b1f"
        }, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 373.1499995504063, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 101325, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 1574.9999999999993, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 7.527244323167393, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 0.23046918498108737, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": 8300.738278054894, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": 24.75581043490124, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 1, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "MAT-568706eb-f28b-405b-9545-faf96e3b8751": {
        "ProductName": "Material Stream", "custom_name": "Butane2_out", "connections": {
            "Out": "MIST-ad767381-40b2-4d1c-a6bf-04c44ab09ec1"
        }, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 527.0602786270787, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 101325, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 1574.9999999999993, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 7.527244323167393, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 0.3255290178144003, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": 29391.492904101087, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": 71.74505698361303, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 1, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "MAT-14003e69-ea88-4243-9bf9-1d6130017930": {
        "ProductName": "Material Stream", "custom_name": "Steam1_out", "connections": {}, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 518.9262108615856, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 5066250, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 5000.000000000004, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 77.09504869693338, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 0.001721258622650332, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": -23805.426213011255, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": -74.01822533338233, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 0, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "MAT-afdcea6d-3332-4373-9277-d160691a4560": {
        "ProductName": "Material Stream", "custom_name": "Butane1_out", "connections": {
            "Out": "MIST-ad767381-40b2-4d1c-a6bf-04c44ab09ec1"
        }, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 527.2133666749103, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 101325, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 1924.9999999999995, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 9.19996528387126, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 0.3979843631027442, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": 29414.96157849582, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": 71.78957643896912, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 1, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "MAT-3708a5a9-9cde-412e-ad93-dc97a54ee0fe": {
        "ProductName": "Material Stream", "custom_name": "Steam1_in", "connections": {
            "Out": "HE-6278bc32-8623-4d78-8805-290597756337"
        }, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 537.9722140086598, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 5066250, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 5000.000000000004, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 77.09504869693338, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 0.001787594586189758, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": -21285.807560031182, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": -67.17021426933591, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 0, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "MAT-42fcc1ee-74aa-4d9c-a150-a85da87d4307": {
        "ProductName": "Material Stream", "custom_name": "2", "connections": {
            "Out": "HE-6278bc32-8623-4d78-8805-290597756337"
        }, "properties": {
            "PROP_MS_0": {
                "name": "Temperature", "value": 373.1499995504063, "unit": "K", "editable": true
            }, "PROP_MS_1": {
                "name": "Pressure", "value": 101325, "unit": "Pa", "editable": true
            }, "PROP_MS_2": {
                "name": "Mass Flow", "value": 1924.9999999999995, "unit": "kg/h", "editable": true
            }, "PROP_MS_3": {
                "name": "Molar Flow", "value": 9.19996528387126, "unit": "mol/s", "editable": true
            }, "PROP_MS_4": {
                "name": "Volumetric Flow", "value": 0.2816845594213291, "unit": "m3/s", "editable": true
            }, "PROP_MS_9": {
                "name": "Mixture Molar Enthalpy", "value": 8300.738278054896, "unit": "kJ/kmol", "editable": true
            }, "PROP_MS_10": {
                "name": "Mixture Molar Entropy", "value": 24.755810434901246, "unit": "kJ/[kmol.K]", "editable": true
            }, "PROP_MS_27": {
                "name": "Vapor Phase Molar Fraction", "value": 1, "unit": "", "editable": true
            }
        }, "additional_properties": {}
    }, "HE-6278bc32-8623-4d78-8805-290597756337": {
        "ProductName": "Heat Exchanger", "custom_name": "1", "connections": {
            "Out": "MAT-14003e69-ea88-4243-9bf9-1d6130017930", "Out1": "MAT-afdcea6d-3332-4373-9277-d160691a4560"
        }, "properties": {
            "PROP_HX_0": {
                "name": "Global Heat Transfer Coefficient (U)", "value": 125, "unit": "W/[m2.K]", "editable": true
            }, "PROP_HX_1": {
                "name": "Heat Exchange Area (A)", "value": 30, "unit": "m2", "editable": true
            }, "PROP_HX_2": {
                "name": "Heat Load", "value": 194.2501213749755, "unit": "kW", "editable": true
            }
        }, "additional_properties": {}
    }
}

import mxGraphFactory from "mxgraph";

const {
    mxClient,
    mxGraphModel,
    mxGraph,
    mxRubberband,
    mxKeyHandler,
    mxUtils,
    mxConstants,
    mxRectangle,
    mxCompactTreeLayout,
    mxToolbar,
    mxGeometry,
    mxCell,
    mxPerimeter,
    mxGraphView,
    mxConnectionConstraint,
    mxShape,
    mxTriangle,
    mxPoint,
    mxConstraintHandler,
    mxImage,
    mxEdgeHandler
} = new mxGraphFactory();

const figures = [
    ['Material Stream', 'MS'],
    ['Energy Stream', 'E'],
    ['Orifice Plate ', 'OP'],
    ['Compressor', 'C'],
    ['Pipe Segment', 'PIPE'],
    ['Pump', 'PUMP'],
    ['Expander (Turbine)', 'X'],
    ['Valve', 'VALVE'],
    ['Compound Separator', 'CS'],
    ['Tank', 'TANK'],
    ['Gas-Liquid Separator', 'V'],
    ['Stream Mixer', 'MIX'],
    ['Stream Splitter', 'SPL'],
    ['Energy Mixer', 'EMIX'],
    ['Cooler', 'CL'],
    ['Heater', 'HT'],
    ['Heat Exchanger', 'HX'],
    ['Air Cooler', 'AC'],
    ['Conversion Reactor', 'RCONV'],
    ['Continuous Stirred Tank Reactor (CSTR)', 'CSTR'],
    ['Equilibrium Reactor', 'REQ'],
    ['Gibbs Reactor', 'RGIBBS'],
    ['Plug-Flow Reactor (PRF)', 'PFR'],
    ['Gibbs Reactor (Reaktoro)', 'RK'],
    ['Chemsep Column', ' CSCOL'],
    ['Distillation Column', 'DCOL'],
    ['Absorption/Extraction Column', ' ABS'],
    ['Shortcut Column', 'SCOL'],
    ['Filter', 'FLT'],
    ['Solids Separator', 'SS'],
    ['Hydroelectric Turbine', 'HT'],
    ['PEM Fuel Cell (Amphlett)', 'FCA'],
    ['Solar Panel', 'SP'],
    ['Water Electrolyzer', 'WE'],
    ['Wind Turbine', 'WT'],
    ['Python Script', 'CUSTOM'],
    ['Flowsheet', 'FS'],
    ['CAPE-OPEN Unit Operation', 'CO'],
    ['Spreadsheet', 'SHEET'],
    ['Input Box', 'IN'],
    ['Switch', 'SW'],
    ['Controller Block', 'C'],
    ['Energy Recycle Block', 'ER'],
    ['Recycle Block', 'R'],
    ['Specification Block', 'SP'],
    ['Analog Gauge', 'AG'],
    ['Digital Gauge', 'DG'],
    ['Level Gauge', 'LG'],
    ['PID Controller', 'PID'],
    ['Dummy Unit Operation', 'DUO']
];

export default function main(el) {
    if (!mxClient.isBrowserSupported()) { //Проверка поддержки браузера
        mxUtils.error("Browser is not supported!", 200, false);
    } else {

        mxClient.NO_FO = mxClient.NO_FO || mxClient.IS_SF || mxClient.IS_GC;
        mxGraph.htmlLabels = true;

        let graph = new mxGraph(el);
        graph.htmlLabels = true;
        graph.vertexLabelsMovable = true;
        new mxRubberband(graph);
        new mxKeyHandler(graph);

        graph.setConnectable(true);
        graph.setPortsEnabled(false);

        let ports = new Array();

        graph.graphHandler.removeCellsFromParent = false;

        graph.autoSizeCellsOnAdd = true;

        graph.isCellLocked = function (cell) {
            return this.isCellsLocked();
        };

        graph.isCellResizable = function(cell) {
            let geo = this.model.getGeometry(cell);

            return geo == null;
        };


        graph.getLabel = function (cell) {
            let label = this.labelsVisible ? this.convertValueToString(cell) : "";
            let geometry = this.model.getGeometry(cell);

            if (!this.model.isCollapsed(cell) && geometry != null && (geometry.offset == null || (geometry.offset.x === 0 && geometry.offset.y === 0)) && this.model.isVertex(cell) && geometry.width >= 2) {
                let style = this.getCellStyle(cell);
                let fontSize = style[mxConstants.STYLE_FONTSIZE] || mxConstants.DEFAULT_FONTSIZE;
                let max = geometry.width / (fontSize * 0.825);

                if (max < label.length) {
                    return label.substring(0, max) + "...";
                }
            }

            return label;
        };

        graph.isWrapping = function (cell) {
            return this.model.isCollapsed(cell);
        };

        graph.isLabelClipped = function (cell) {
            let geometry = this.model.getGeometry(cell);

            return (geometry != null && !geometry.relative && (geometry.offset == null || (geometry.offset.x === 0 && geometry.offset.y === 0)));
        };

        let parent = graph.getDefaultParent();

        graph.getModel().beginUpdate();

        // Для соединения клеток графа. Длинный кусок кода

        mxConstraintHandler.prototype.pointImage = new mxImage('images/dot.gif', 10, 10);
        ports['w'] = {x: 0, y: 0.5, perimeter: true, constraint: 'west'};
        ports['e'] = {x: 1, y: 0.5, perimeter: true, constraint: 'east'};
        ports['n'] = {x: 0.5, y: 0, perimeter: true, constraint: 'north'};
        ports['s'] = {x: 0.5, y: 1, perimeter: true, constraint: 'south'};

        let ports2 = new Array();

        ports2['in1'] = {x: 0, y: 0, perimeter: true, constraint: 'west'};
        ports2['in2'] = {x: 0, y: 0.25, perimeter: true, constraint: 'west'};
        ports2['in3'] = {x: 0, y: 0.5, perimeter: true, constraint: 'west'};
        ports2['in4'] = {x: 0, y: 0.75, perimeter: true, constraint: 'west'};
        ports2['in5'] = {x: 0, y: 1, perimeter: true, constraint: 'west'};

        ports2['out1'] = {x: 0.5, y: 0, perimeter: true, constraint: 'north east'};
        ports2['out2'] = {x: 1, y: 0.5, perimeter: true, constraint: 'east'};
        ports2['out3'] = {x: 0.5, y: 1, perimeter: true, constraint: 'south east'};

        mxShape.prototype.getPorts = function () {
            return ports;
        };

        mxTriangle.prototype.getPorts = function () {
            return ports2;
        };

        graph.connectionHandler.isConnectableCell = function (cell) {
            return false;
        };
        mxEdgeHandler.prototype.isConnectableCell = function (cell) {
            return graph.connectionHandler.isConnectableCell(cell);
        };

        graph.view.getTerminalPort = function (state, terminal, source) {
            return terminal;
        };

        graph.getAllConnectionConstraints = function (terminal, source) {
            if (terminal != null && terminal.shape != null &&
                terminal.shape.stencil != null) {
                if (terminal.shape.stencil != null) {
                    return terminal.shape.stencil.constraints;
                }
            } else if (terminal != null && this.model.isVertex(terminal.cell)) {
                if (terminal.shape != null) {
                    let ports = terminal.shape.getPorts();
                    let cstrs = new Array();

                    for (let id in ports) {
                        let port = ports[id];

                        let cstr = new mxConnectionConstraint(new mxPoint(port.x, port.y), port.perimeter);
                        cstr.id = id;
                        cstrs.push(cstr);
                    }

                    return cstrs;
                }
            }

            return null;
        };

        graph.setConnectionConstraint = function (edge, terminal, source, constraint) {
            if (constraint != null) {
                let key = (source) ? mxConstants.STYLE_SOURCE_PORT : mxConstants.STYLE_TARGET_PORT;

                if (constraint == null || constraint.id == null) {
                    this.setCellStyles(key, null, [edge]);
                } else if (constraint.id != null) {
                    this.setCellStyles(key, constraint.id, [edge]);
                }
            }
        };
        graph.getConnectionConstraint = function (edge, terminal, source) {
            let key = (source) ? mxConstants.STYLE_SOURCE_PORT : mxConstants.STYLE_TARGET_PORT;
            let id = edge.style[key];

            if (id != null) {
                let c = new mxConnectionConstraint(null, null);
                c.id = id;
                return c;
            }
            return null;
        };

        const graphGetConnectionPoint = graph.getConnectionPoint;
        graph.getConnectionPoint = function (vertex, constraint) {
            if (constraint.id != null && vertex != null && vertex.shape != null) {
                let port = vertex.shape.getPorts()[constraint.id];

                if (port != null) {
                    constraint = new mxConnectionConstraint(new mxPoint(port.x, port.y), port.perimeter);
                }
            }

            return graphGetConnectionPoint.apply(this, arguments);
        };


        // Создание элементов графа под нужные фигуры
                let style = new Object();
                for (let i = 0; i < figures.length; i++) {
                    if (i == 0) {
                        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
                        style[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';

                        style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
                        style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
                    } else {
                        style = mxUtils.clone(style);
                    }
                    style[mxConstants.STYLE_IMAGE] = 'images/' + figures[i][0].replace(/\W*/gi, '')  + '.png';
                    graph.getStylesheet().putCellStyle('\'' + figures[i][0].toUpperCase().replace(/\W*/gi, '') + '\'', style);
                }

        let arr = []; //Список вершин, специально вынесла наружу
        //Справочник сопоставления типа и фигуры
        function switchType(productName) {
            //return 'ROUNDED;strokeColor=red;fillColor=green';
            return '\'' + productName.toUpperCase().replace(/\W*/gi, '') + '\''; // Выгрузить точный справочник всех фигур по наименованиям
        }

        function graphCreate(dic) {
            //Создаем вершины
            for (let key in dic) {
                // mxGraph.insertVertex(parent, id, value, x, y, width, height, style)
                // Придется запихнуть в айдишник ячейки: айди и тип
                arr.push(graph.insertVertex(parent, key + '/' + dic[key].ProductName, null, 20 + Math.floor(Math.random() * 100), 20 + Math.floor(Math.random() * 100), 70, 70, switchType(dic[key].ProductName)));

                //Подпись вершин графа
                let check = 1;
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j].id.split('/')[1].toUpperCase().replace(/\W*/gi, '') === dic[key].ProductName.toUpperCase().replace(/\W*/gi, '')) check++;
                }
                for (let j = 0; j < figures.length; j++) {
                    if (figures[j][0].toUpperCase().replace(/\W*/gi, '') === dic[key].ProductName.toUpperCase().replace(/\W*/gi, '')) {
                        console.log(`figures[j][0] = ${figures[j][0]}  
                    dic[key].ProductName = ${dic[key].ProductName}`)
                        graph.insertVertex(arr[arr.length - 1], null, figures[j][1] + ' - ' + (check + 1), 0.5, 1.3, 0, 0, null, true);
                    }
                }

                check = 1;

            }
            //Создаем ребра графа
            for (let key in dic) {
                for (let out in dic[key].connections) {
                    for (let k = 0; k < arr.length; k++) {
                        if (key === arr[k].id.split('/')[0]) {
                            for (let j = 0; j < arr.length; j++) {
                                if (out.length > 0 && dic[key].connections[out] === arr[j].id.split('/')[0]) {
                                    graph.insertEdge(parent, null, null, arr[k], arr[j]);
                                }
                            }
                        }
                    }
                }
            }
            let layout = new mxCompactTreeLayout(graph);

            layout.execute(parent);
        }

        try {
            //Создание графа
            graphCreate(dic);

        } finally {
            graph.getModel().endUpdate();
        }
    }
}
try {
    main(document.getElementById("graphContainer"));
} catch (er) {
    console.log("error in main ", er.message);
}
