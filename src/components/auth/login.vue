<template>
    <div class="login-main-container">
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div class="form-group">
                <label>Email</label>
                <Field name="email" type="text" class="form-control" :class="{ 'is-invalid': errors.email }" />
                <div class="invalid-feedback">{{errors.email}}</div>
            </div>            
            <div class="form-group">
                <label>Password</label>
                <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>            
            <div class="form-group">
                <button class="btn btn-primary" :disabled="isSubmitting">
                    <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                    Login
                </button>
            </div>
            <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{errors.apiError}}</div>
        </Form>
    </div>
</template>
<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useAuthStore } from '@/stores';
export default {
    name: 'LoginComponentVue',
    components: {
        Form,
        Field
    },
    setup() {
        const schema = Yup.object().shape({
            email: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required')
        });
        function onSubmit(values, { setErrors }) {
            const authStore = useAuthStore();
            const { email, password } = values;

            return authStore.login(email, password)
                .catch(error => setErrors({ apiError: error }));
        }
        return {
            schema,
            onSubmit
        }
    }
}
</script>
<style>
    .login-main-container {
        width: 25%;
        box-shadow: 0 2px 15px #00000012;
        border-radius: 10px;
        border: 1px solid rgba(0,0,0,.125);;
        padding: 30px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .login-main-container .form-group .btn-primary {
        width: 100%;
        margin: 16px 0;
    }
    .login-main-container .form-group .btn-primary:focus {
        box-shadow: none;
    }
</style>