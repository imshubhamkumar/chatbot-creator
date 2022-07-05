<template>
  <div class="modal show" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <button type="button" @click="$emit('close-modal')" class="btn-close" aria-label="Close"></button>
      <div class="modal-body">
        <h4>Create new bot</h4>
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
            <div class="form-group">
                <label>Bot Nmae</label>
                <Field name="botName" type="text" class="form-control" :class="{ 'is-invalid': errors.botName }" />
                <div class="invalid-feedback">{{errors.password}}</div>
            </div> 
            <div class="form-group">
                <label>Short Description</label>
                <Field name="botDescription" type="text" class="form-control" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="isSubmitting">
                    <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                    Create
                </button>
            </div>
            <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{errors.apiError}}</div>   
        </Form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { createBot } from '../../helpers/services';
export default {
  name: "CreateBotModalVue",
  components: {
    Form,
    Field
  },
      setup() {
        const schema = Yup.object().shape({
            botName: Yup.string().required('Username is required'),
        });
        function onSubmit(values, {setErrors}) {
             if(!values.botDescription) {
                values.botDescription = '';
            }
            const { botName, botDescription } = values;
            return createBot(botName, botDescription)
                .catch(error => setErrors({ apiError: error }));
        }
        return {
            schema,
            onSubmit
        }
    }
};
</script>
<style>
    .modal.show {
        display: block;
        background-color: #000000da;
    }
    .modal.show .btn-close {
        box-shadow: none;
        margin: -25px;
        background-color: #ffffff;
        color: #61dafb;
        height: 24px;
        width: 24px;
        border-radius: 50%;
    }
    .modal.show .modal-body {
        margin-top: 20px;
    }

    .modal.show .modal-body .form-group .btn-primary {
        width: 100%;
        margin: 16px 0;
    }
    .modal.show .modal-body .form-group .btn-primary:focus {
        box-shadow: none;
    }
    .modal.show .modal-body .form-group .form-control:focus {
        box-shadow: none;
    }
</style>
