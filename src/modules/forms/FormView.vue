<template>
  <v-container>
    <v-row class="justify-center text-center">
      <v-col cols="12" sm="12" md="10">
        <v-card>
          <v-card-title class="justify-center grey darken-3 white--text"
            >Entrega de turnos ambulancias</v-card-title
          >
        </v-card>

        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">
              Verificación
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">
              Estado del vehículo
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 3" step="3">
              Herramientas
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 4" step="4">
              Dispositivos médicos
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 5" step="5">
              Observaciones
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="4" md="2">
                    <v-text-field
                      label="Kilometraje"
                      type="number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" md="3">
                    <v-select label="Estado de llantas delanteras"> </v-select>
                  </v-col>
                  <v-col cols="12" sm="4" md="3">
                    <v-select label="Estado de llantas traseras"> </v-select>
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <v-select label="Estado de llantas de repuesto"> </v-select>
                  </v-col>
                </v-row>

                <div class="mt-4 mb-4">
                      Por favor revisar si los siguientes elementos están
                      presentes o siguen vigentes:
                    </div>

                <v-row>
                  <v-col cols="12" sm="5" md="2">
                    <v-checkbox label="SOAT"> </v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="5" md="3">
                    <v-checkbox label="Tecnicomecánica"> </v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="5" md="2">
                    <v-checkbox label="Botiquín"> </v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="5" md="2">
                    <v-checkbox label="Cascos"> </v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="5" md="2">
                    <v-checkbox label="Chalecos"> </v-checkbox>
                  </v-col>


                </v-row>
              </v-form>

              <v-col cols="12" class="justify-center" align="center">
                <v-btn color="primary" dark>
                    <v-icon dark class="mr-1" @click="e1 = 2">mdi-arrow-right-thick</v-icon>
                    Siguiente
                </v-btn>
              </v-col>
            </v-stepper-content>

            <v-stepper-content step="2">
                <div class="mt-4 mb-4">
                      Por favor revisar si los siguientes elementos están
                      presentes:
                    </div>
                <v-form ref="form" lazy-validation>
                    <v-row>
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Combustible"
                            >
                            </v-checkbox>
                        </v-col> 
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Aceite de motor"
                            >
                            </v-checkbox>
                        </v-col> 
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Aceite hidráulico"
                            >
                            </v-checkbox>
                        </v-col> 
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Agua"
                            >
                            </v-checkbox>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Líquido de frenos"
                            >
                            </v-checkbox>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Suspensión"
                            >
                            </v-checkbox>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Sistema eléctrico"
                            >
                            </v-checkbox>
                        </v-col>    
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Testigo tablero"
                            >
                            </v-checkbox>
                        </v-col> 
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Latonería y pintura"
                            >
                            </v-checkbox>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Aseo"
                            >
                            </v-checkbox>
                        </v-col> 
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Tapa interior combustible"
                            >
                            </v-checkbox>
                        </v-col> 
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Tapa exterior combustible"
                            >
                            </v-checkbox>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Martillo de fragmentación"
                            >
                            </v-checkbox>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                            <v-checkbox
                            label="Sirena con perifoneo"
                            >
                            </v-checkbox>
                        </v-col> 
                    </v-row>
                </v-form>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>
