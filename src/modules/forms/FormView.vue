<template>
  <v-container>
    <v-row class="justify-center text-center">
      <v-col cols="12" sm="12" md="12">
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
                    <v-select
                      label="Estado de llantas delanteras"
                      :items="selectLlantas"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="4" md="3">
                    <v-select
                      label="Estado de llantas traseras"
                      :items="selectLlantas"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <v-select
                      label="Estado de llantas de repuesto"
                      :items="selectLlantas"
                    >
                    </v-select>
                  </v-col>
                </v-row>

                <div class="mt-4 mb-4">
                  Por favor revisar si los siguientes elementos están presentes
                  o siguen vigentes:
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
                <v-btn
                  color="primary"
                  fab
                  small
                  dark
                  @click="e1++, scrollToTop()"
                >
                  <v-icon dark>mdi-arrow-right-thick</v-icon>
                </v-btn>
              </v-col>
            </v-stepper-content>

            <v-stepper-content step="2">
              <div class="mt-4 mb-4">
                Por favor revisar si los siguientes elementos están presentes:
              </div>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Combustible"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.combustible"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Aceite de motor"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.aceiteMotor"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Aceite hidráulico"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.aceiteHidraulico"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Agua"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.agua"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Líquido de frenos"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.liquido_frenos"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Suspensión"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.suspension"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Sistema eléctrico"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.sist_electrico"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Testigo tablero"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.test_tablero"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Latonería y pintura"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.latoneria"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Aseo"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.aseo"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Tapa interior combustible"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.tapa_interior"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Tapa exterior combustible"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.tapa_exterior"
                    >
                    </v-select>
                  </v-col>
                </v-row>

                <v-row class="justify-center">
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Martillo de fragmentación"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.martillo"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Sirena con perifoneo"
                      :items="selectChequeo"
                      v-model="estadoVehiculo.sirena"
                    >
                    </v-select>
                  </v-col>
                </v-row>

                <v-row class="justify-center" v-if="noAplica">
                  <v-col cols="8" sm="6" md="8">
                    <v-textarea label="Comentarios"></v-textarea>
                  </v-col>
                </v-row>
              </v-form>

              <v-row class="justify-center mb-4 mt-4">
                <v-btn
                  color="primary"
                  fab
                  small
                  dark
                  @click="e1--, scrollToTop()"
                  class="mr-1"
                >
                  <v-icon dark>mdi-arrow-left-thick</v-icon>
                </v-btn>
                <v-btn
                  color="primary"
                  fab
                  small
                  dark
                  @click="e1++, scrollToTop()"
                >
                  <v-icon dark>mdi-arrow-right-thick</v-icon>
                </v-btn>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="3">
              <div class="mb-4 mt-4">
                Por favor revisar si las siguientes herramientas están
                disponibles:
              </div>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Extintor vigente"
                      :items="selectChequeo"
                      v-model="herramientas.extintor"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Alicate (1)"
                      :items="selectChequeo"
                      v-model="herramientas.alicate"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Destornillador de estría (3)"
                      :items="selectChequeo"
                      v-model="herramientas.dest_estria"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Destornillador de pala"
                      :items="selectChequeo"
                      v-model="herramientas.dest_pala"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Llave de expansión"
                      :items="selectChequeo"
                      v-model="herramientas.llave_exp"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Llaves mixtas (6)"
                      :items="selectChequeo"
                      v-model="herramientas.llave_mixta"
                    >
                    </v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Llanta de repuesto"
                      :items="selectChequeo"
                      v-model="herramientas.llanta_rep"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Llave de pernos"
                      :items="selectChequeo"
                      v-model="herramientas.llave_pernos"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Señales de emergencia (2)"
                      :items="selectChequeo"
                      v-model="herramientas.senales"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Linterna con pilas"
                      :items="selectChequeo"
                      v-model="herramientas.linterna"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Caja de fusibles surtidos"
                      :items="selectChequeo"
                      v-model="herramientas.fusibles"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Gato"
                      :items="selectChequeo"
                      v-model="herramientas.gato"
                    >
                    </v-select>
                  </v-col>
                </v-row>
                <v-row class="justify-center">
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Tacos (2)"
                      :items="selectChequeo"
                      v-model="herramientas.tacos"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Cuerda estática de 20 m"
                      :items="selectChequeo"
                      v-model="herramientas.cuerda"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Juego de cables para iniciación eléctrica"
                      :items="selectChequeo"
                      v-model="herramientas.cables"
                    >
                    </v-select>
                  </v-col>
                </v-row>
              </v-form>

              <v-row class="justify-center mb-4 mt-4">
                <v-btn
                  color="primary"
                  fab
                  small
                  dark
                  @click="e1--, scrollToTop()"
                  class="mr-1"
                >
                  <v-icon dark>mdi-arrow-left-thick</v-icon>
                </v-btn>
                <v-btn
                  color="primary"
                  fab
                  small
                  dark
                  @click="e1++, scrollToTop()"
                >
                  <v-icon dark>mdi-arrow-right-thick</v-icon>
                </v-btn>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="4">
              <div class="mt-4 mb-4">
                Revisar si el equipo médico se encuentra presente o si está
                completo:
              </div>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Electrocardiógrafo" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Pulsioxímetro" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Nebulizador" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Cilindro de oxígeno"
                      :items="selectChequeo"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Pico flujo" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Aspirador" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Desfibrilador" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Ventilador" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Bomba de infusión" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Monitor" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Maleta reanimación"
                      :items="selectMaletines"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Maleta médica" :items="selectMaletines">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Equipo de sutura" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Equipo de parto" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Torniquete" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Silla de ruedas" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Camilla principal" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Camilla secundaria" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Pinza de Maguill" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Tabla espinal" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Riñonera" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Corta anillos" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select label="Pato H/M" :items="selectChequeo">
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Material de trauma"
                      :items="selectMaletines"
                    >
                    </v-select>
                  </v-col>
                </v-row>
              </v-form>

              <v-row class="justify-center mb-4 mt-4">
                <v-btn
                  color="primary"
                  fab
                  small
                  dark
                  @click="e1--, scrollToTop()"
                  class="mr-1"
                >
                  <v-icon dark>mdi-arrow-left-thick</v-icon>
                </v-btn>
                <v-btn
                  color="primary"
                  fab
                  small
                  dark
                  @click="e1++, scrollToTop()"
                >
                  <v-icon dark>mdi-arrow-right-thick</v-icon>
                </v-btn>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="5">
              <div class="mt-4 mb-4">
                Este espacio es para proporcionar comentarios respecto al cambio
                de turno.
              </div>

              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12" md="6" sm="6">
                    <v-checkbox
                      v-model="toggleNovedades"
                      label="¿Han habido novedades?"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" md="6" sm="6">
                    <v-textarea
                      :disabled="!toggleNovedades"
                      label="Describir las novedades presentadas"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-form>

              <v-row class="justify-center mb-4 mt-4">
                <v-btn
                  color="primary"
                  fab
                  small
                  dark
                  @click="e1--, scrollToTop()"
                  class="mr-1"
                >
                  <v-icon dark>mdi-arrow-left-thick</v-icon>
                </v-btn>
                <v-btn color="success" fab small dark @click="scrollToTop()">
                  <v-icon dark>mdi-check-bold</v-icon>
                </v-btn>
              </v-row>
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
      toggleNovedades: false,
      selectChequeo: ["Cumple", "No cumple", "No aplica"],

      selectLlantas: ["Bueno", "Regular", "Malo"],

      selectMaletines: ["Sellado", "Abierto"],

      estadoVehiculo: {
        combustible: "",
        aceiteMotor: "",
        aceiteHidraulico: "",
        agua: "",
        liquido_frenos: "",
        suspension: "",
        sist_electrico: "",
        test_tablero: "",
        latoneria: "",
        aseo: "",
        tapa_interior: "",
        tapa_exterior: "",
        martillo: "",
        sirena: "",
      },

      herramientas: {
        extintor: "",
        alicate: "",
        dest_estria: "",
        dest_pala: "",
        llave_exp: "",
        llave_mixta: "",
        llanta_rep: "",
        llave_pernos: "",
        senales: "",
        linterna: "",
        fusibles: "",
        gato: "",
        tacos: "",
        cuerda: "",
        cables: "",
      },

      equipos: {
        electrocardiografo: "",
        pulsioximetro: "",
        nebulizador: "",
        cilindro_oxigeno: "",
        pico_flujo: "",
        aspirador: "",
        desfibrilador: "",
        ventilador: "",
        bomba_infusion: "",
        monitor: "",
        maletin_reanimacion: "",
        maleta_medica: "",
        equipo_sutura: "",
        equipo_parto: "",
        torniquete: "",
        silla_ruedas: "",
        camilla_prin: "",
        camilla_sec: "",
        pinza: "",
        tabla_espinal: "",
        rinonera: "",
        corta_anillos: "",
        mat_trauma: "",
        pato: "",
      },

      noAplicaEstado: false,
      noAplicaHerramientas: false,
      noAplicaEquipos: false,
    };
  },

  watch: {
    estadoVehiculo: {
      handler: function (val) {
        const arrayLlaves = Object.keys(val);
        this.noAplicaEstado = false;

        for (let index = 0; index < arrayLlaves.length; index++) {
          if (val[arrayLlaves[index]] == "No aplica") {
            this.noAplicaEstado = true;
          }
        }
      },
      deep: true,
    },

    herramientas: {
      handler: function (val) {
        const arrayLlaves = Object.keys(val);
        this.noAplicaHerramientas = false;

        for (let index = 0; index < arrayLlaves.length; index++) {
          if (val[arrayLlaves[index]] == "No aplica") {
            this.noAplicaHerramientas = true;
          }
        }
      },
    },
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
