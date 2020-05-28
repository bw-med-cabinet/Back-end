
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Strains').del()
    .then(function () {
      // Inserts seed entries
      return knex('Strains').insert([
        
        {
          "Strain": "Zoom-Pie",
          "Type": "indica",
          "Rating": 4.6,
          "effects": "Hungry,Relaxed,Uplifted,Happy,Sleepy",
          "flavor": "Berry,Earthy,Pungent",
          "description": "Zoom Pie (also known as Zombie Pie) is a heavy indica-dominant strain that blends the potency of Blue Zombie with the flavor and color of Cherry Pie. This combination yields blue and purple foliage that reeks of tart cherries and pungent skunky fuel. It is known to stimulate appetite while imbuing the consumer with a heady euphoria (presumably from the recessive African landrace, Durban Poison, nestled in Cherry Pie). Enjoy this strain as a means to crush stress, physical discomfort, and depression. But be aware, this strain will apply sedative effects to the body when dosed heavily. This strain was bred by Tank aka gansettfinest of NICE LLC."
        }
      ]);
    });
};
