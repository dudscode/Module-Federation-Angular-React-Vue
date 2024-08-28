<script>
import { defineCustomElement } from 'vue';

const HelloWord = defineCustomElement({
  styles: [`
  h2 {
    margin-top: 10px;
  }`],
    template:`
      <h2>Eu sou Feminino e fui criado com VUE v.3</h2>
    `,
  });

customElements.define("vue-element", HelloWord);

export default HelloWord;
</script>