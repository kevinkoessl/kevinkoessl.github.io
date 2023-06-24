<template>
  <section class="hero is-medium is-light">
    <div class="hero-body is-relative">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-half is-offset-3">
            <form class="lol">
              <div class="title is-3 has-text-black">Kontakt</div>
              <b-field label="Name *">
                <b-input v-model="name"></b-input>
              </b-field>

              <b-field label="E-Mail *">
                <b-input type="email" v-model="email" maxlength="30" required> </b-input>
              </b-field>

              <b-field label="Deine Anfrage">
                <b-input type="textarea" v-model="content"> </b-input>
              </b-field>

              <div class="has-text-right">
                <b-button type="is-black" native-type="submit" icon-right="arrow-right">Abschicken</b-button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      name: null,
      content: null,
      phone: null,
      email: null,
    };
  },
  mounted() {},
};
</script>
<style lang="scss" scoped></style>
