<template>
  <div class="home">
    <h1>Softex Test App</h1>
    <app-carousel
      :items="items"
    >
    </app-carousel>
    <app-article-text>
      <p>
        His to lone can dote vast thy and childe below. Passion into
        more sad mirthful knew but the that in. Been mirthful awake
        which talethis mammon he, awake yes childe these open he sadness
        feels. Of before been night deemed. Yet kiss and the and, soul
        and land below but sing old where. Spoiled known hope ah ive,
        begun at upon childe ever companie tis sore lay. In he by be
        wrong fellow he mammon a in, and in by bower shrine of of. He
        long some were tis thy he satiety his. Wassailers loved bade
        said friends aisle, from.
      </p>
      <p>
        Radiant but so nightly faintly has bust at. Ominous press the
        into liftednevermore the this bird hear, lattice of only chamber
        shore that dreams. Bird still it me my or distinctly not, a
        napping so will bore i with i velvet, bird floor a out the or
        take fancy and explore, this this is adore on thee craven
        nepenthe. Both on there said floor then i meant by had. Plume
        bird that obeisance my, what door no wore doubtless. Kind
        stillness visiter door at lordly. Thereis it chamber more some.
        Was the prophet myself back my what, at lordly desolate
        upstarting into is mortals before though many, i wind of with he
        more divining nights door once, to a nevermore each me is at my
        more, but we fast quaint silence heart that this there sought,
        purple dirges i home the, in more merely into mystery.
      </p>
      <p>
        Sadipscing takimata aliquyam sit labore sanctus, lorem ipsum
        magna dolores sadipscing stet duo. Ipsum duo justo invidunt vero
        eos, dolore vero eirmod justo lorem sit est dolores accusam. Est
        elitr accusam clita eos. Gubergren ut est accusam accusam dolor
        stet kasd. Sit lorem ipsum et dolor kasd eos tempor consetetur
        eos. Ea rebum sea sed sed tempor dolor. Aliquyam et est et elitr
        consetetur et, dolore dolor amet at labore stet diam. Dolor diam
        lorem sit takimata sadipscing ea. Et justo invidunt amet diam
        ipsum ut erat clita lorem, tempor vero dolor dolore ea takimata
        lorem lorem amet sadipscing, invidunt.
      </p>
    </app-article-text>
  </div>
</template>


<script>
import AppCarousel from '../components/AppCarousel';
import AppArticleText from '../components/AppArticleText';


export default {
  name: 'Home',

  components: {
    AppCarousel,
    AppArticleText,
  },

  data() {
    return {
      items: [
        {
          id: '1',
          src: 'https://picsum.photos/320/320/?image=274',
          title: 'Title 1',
        },
        {
          id: '2',
          src: 'https://picsum.photos/320/320/?image=244',
          title: 'Title 2',
        },
        {
          id: '3',
          src: 'https://picsum.photos/320/320/?image=517',
          title: 'Title 3',
        },
        {
          id: '4',
          src: 'https://picsum.photos/320/320/?image=879',
          title: 'Title 4',
        },
        {
          id: '5',
          src: 'https://picsum.photos/320/320/?image=979',
          title: 'Title 5',
        },
        {
          id: '6',
          src: 'https://picsum.photos/320/320/?image=271',
          title: 'Title 6',
        },
        {
          id: '7',
          src: 'https://picsum.photos/320/320/?image=890',
          title: 'Title 7',
        },
      ],
    };
  },
};
</script>
