let Table = function() {
    this.entries = [];
    this.tableIndexTracker = 0;

    this.addEntry = function(low, high, result) {
        this.entries.push({
            low: low,
            high: high,
            result: result,
            index: this.tableIndexTracker++
        });
    }

    this.getResult = function(roll) {
        for (let e of this.entries) {
            if (roll <= e.high && roll >= e.low) {
                return {result: e.result, index: e.index};
            }
        }
        return null;
    }
}

const worldTable = new Table();
worldTable.addEntry(1, 20, "Feral Worlder");
worldTable.addEntry(21, 45, "Hive Worlder");
worldTable.addEntry(46, 90, "Imperial Worlder");
worldTable.addEntry(90, 100, "Void-Born");

const genderTable = new Table();
genderTable.addEntry(1, 5, "Male");
genderTable.addEntry(6, 10, "Female");

const nameTables = [
    new Table(),
    new Table(),
    new Table(),
    new Table(),
    new Table(),
    new Table(),
    new Table(),
    new Table(),
    new Table(),
    new Table()
];

nameTables[0].addEntry(1, 6, "Artho");
nameTables[0].addEntry(7, 12, "Bron");
nameTables[0].addEntry(13, 18, "Carno");
nameTables[0].addEntry(19, 24, "Hob");
nameTables[0].addEntry(25, 30, "Gil");
nameTables[0].addEntry(31, 36, "Jorn");
nameTables[0].addEntry(37, 42, "Kerghan");
nameTables[0].addEntry(43, 48, "Lok");
nameTables[0].addEntry(49, 54, "Marn");
nameTables[0].addEntry(55, 60, "Pak");
nameTables[0].addEntry(61, 66, "Quinn");
nameTables[0].addEntry(67, 72, "Stiehr");
nameTables[0].addEntry(73, 78, "Thale");
nameTables[0].addEntry(79, 84, "Vir");
nameTables[0].addEntry(85, 90, "Ziel");

nameTables[1].addEntry(1, 6, "Attie");
nameTables[1].addEntry(7, 12, "Besse");
nameTables[1].addEntry(13, 18, "Flur");
nameTables[1].addEntry(19, 24, "Halia");
nameTables[1].addEntry(25, 30, "Jesse");
nameTables[1].addEntry(31, 36, "Karina");
nameTables[1].addEntry(37, 42, "Marra");
nameTables[1].addEntry(43, 48, "Narine");
nameTables[1].addEntry(49, 54, "Ovina");
nameTables[1].addEntry(55, 60, "Ralle");
nameTables[1].addEntry(61, 66, "Salia");
nameTables[1].addEntry(67, 72, "Tassa");
nameTables[1].addEntry(73, 78, "Unna");
nameTables[1].addEntry(79, 84, "Vyn");
nameTables[1].addEntry(85, 90, "Yasha");

nameTables[2].addEntry(1, 6, "Alt");
nameTables[2].addEntry(7, 12, "Blade");
nameTables[2].addEntry(13, 18, "Cutter");
nameTables[2].addEntry(19, 24, "Echo");
nameTables[2].addEntry(25, 30, "Gant");
nameTables[2].addEntry(31, 36, "Hal");
nameTables[2].addEntry(37, 42, "Jak");
nameTables[2].addEntry(43, 48, "Mord");
nameTables[2].addEntry(49, 54, "Notch");
nameTables[2].addEntry(55, 60, "Rook");
nameTables[2].addEntry(61, 66, "Sawyer");
nameTables[2].addEntry(67, 72, "Serge");
nameTables[2].addEntry(73, 78, "Stubbs");
nameTables[2].addEntry(79, 84, "Torque");
nameTables[2].addEntry(85, 90, "Veche");

nameTables[3].addEntry(1, 6, "Astra");
nameTables[3].addEntry(7, 12, "Blur");
nameTables[3].addEntry(13, 18, "Ciele");
nameTables[3].addEntry(19, 24, "Crimson");
nameTables[3].addEntry(25, 30, "Flora");
nameTables[3].addEntry(31, 36, "Guile");
nameTables[3].addEntry(37, 42, "Luna");
nameTables[3].addEntry(43, 48, "Mia");
nameTables[3].addEntry(49, 54, "Poise");
nameTables[3].addEntry(55, 60, "Rosa");
nameTables[3].addEntry(61, 66, "Sola");
nameTables[3].addEntry(67, 72, "Trenne");
nameTables[3].addEntry(73, 78, "Val");
nameTables[3].addEntry(79, 84, "Xandra");
nameTables[3].addEntry(85, 90, "Zeile");

nameTables[4].addEntry(1, 6, "Alessaunder");
nameTables[4].addEntry(7, 12, "Aphesius");
nameTables[4].addEntry(13, 18, "Cornelius");
nameTables[4].addEntry(19, 24, "Darius");
nameTables[4].addEntry(25, 30, "Fortunus");
nameTables[4].addEntry(31, 36, "Godwinne");
nameTables[4].addEntry(37, 42, "Holt");
nameTables[4].addEntry(43, 48, "Jarrion");
nameTables[4].addEntry(49, 54, "Macharius");
nameTables[4].addEntry(55, 60, "Quinilli");
nameTables[4].addEntry(61, 66, "Regias");
nameTables[4].addEntry(67, 72, "Sarvus");
nameTables[4].addEntry(73, 78, "Tristan");
nameTables[4].addEntry(79, 84, "Victris");
nameTables[4].addEntry(85, 90, "Xanatov");

nameTables[5].addEntry(1, 6, "Anarette");
nameTables[5].addEntry(7, 12, "Carnelia");
nameTables[5].addEntry(13, 18, "Dominique");
nameTables[5].addEntry(19, 24, "Faydra");
nameTables[5].addEntry(25, 30, "Inessa");
nameTables[5].addEntry(31, 36, "Janthine");
nameTables[5].addEntry(37, 42, "Lucretia");
nameTables[5].addEntry(43, 48, "Marcella");
nameTables[5].addEntry(49, 54, "Jama");
nameTables[5].addEntry(55, 60, "Noradine");
nameTables[5].addEntry(61, 66, "Regina");
nameTables[5].addEntry(67, 72, "Symonne");
nameTables[5].addEntry(73, 78, "Winter");
nameTables[5].addEntry(79, 84, "Yolande");
nameTables[5].addEntry(85, 90, "Zamora");

nameTables[6].addEntry(1, 6, "Aestaban");
nameTables[6].addEntry(7, 12, "Casmirre");
nameTables[6].addEntry(13, 18, "Gillam");
nameTables[6].addEntry(19, 24, "Haddon");
nameTables[6].addEntry(25, 30, "Jonstonne");
nameTables[6].addEntry(31, 36, "Kennoch");
nameTables[6].addEntry(37, 42, "Mordechai");
nameTables[6].addEntry(43, 48, "Orthesian");
nameTables[6].addEntry(49, 54, "Patronius");
nameTables[6].addEntry(55, 60, "Ramirez");
nameTables[6].addEntry(61, 66, "Sebastion");
nameTables[6].addEntry(67, 72, "Siegmund");
nameTables[6].addEntry(73, 78, "Torian");
nameTables[6].addEntry(79, 84, "Vendigroth");
nameTables[6].addEntry(85, 90, "Yorke");

nameTables[7].addEntry(1, 6, "Anastasia");
nameTables[7].addEntry(7, 12, "Cymbry");
nameTables[7].addEntry(13, 18, "Esailla");
nameTables[7].addEntry(19, 24, "Iioneyse");
nameTables[7].addEntry(25, 30, "Janelle");
nameTables[7].addEntry(31, 36, "Lorayne");
nameTables[7].addEntry(37, 42, "Katyaina");
nameTables[7].addEntry(43, 48, "Miriam");
nameTables[7].addEntry(49, 54, "Nadeyse");
nameTables[7].addEntry(55, 60, "Petriam");
nameTables[7].addEntry(61, 66, "Serafina");
nameTables[7].addEntry(67, 72, "Tarvanna");
nameTables[7].addEntry(73, 78, "Undynne");
nameTables[7].addEntry(79, 84, "Victrix");
nameTables[7].addEntry(85, 90, "Zephyr");

nameTables[8].addEntry(1, 6, "Aubray");
nameTables[8].addEntry(7, 12, "Cort");
nameTables[8].addEntry(13, 18, "Emil");
nameTables[8].addEntry(19, 24, "Harmon");
nameTables[8].addEntry(25, 30, "Jace");
nameTables[8].addEntry(31, 36, "Lucius");
nameTables[8].addEntry(37, 42, "Malakai");
nameTables[8].addEntry(43, 48, "Nathin");
nameTables[8].addEntry(49, 54, "Remi");
nameTables[8].addEntry(55, 60, "Roland");
nameTables[8].addEntry(61, 66, "Solar");
nameTables[8].addEntry(67, 72, "Theodore");
nameTables[8].addEntry(73, 78, "Vorgen");
nameTables[8].addEntry(79, 84, "Ysarille");
nameTables[8].addEntry(85, 90, "Zacharie");

nameTables[9].addEntry(1, 6, "Barbaretta");
nameTables[9].addEntry(7, 12, "Cynthia");
nameTables[9].addEntry(13, 18, "Diane");
nameTables[9].addEntry(19, 24, "Dorath");
nameTables[9].addEntry(25, 30, "Elisabet");
nameTables[9].addEntry(31, 36, "Faye");
nameTables[9].addEntry(37, 42, "Genevie");
nameTables[9].addEntry(43, 48, "Isabelle");
nameTables[9].addEntry(49, 54, "Jayne");
nameTables[9].addEntry(55, 60, "Josette");
nameTables[9].addEntry(61, 66, "Noemi");
nameTables[9].addEntry(67, 72, "Odette");
nameTables[9].addEntry(73, 78, "Shandra");
nameTables[9].addEntry(79, 84, "Tanda");
nameTables[9].addEntry(85, 90, "Zolla");

const divinationTable = new Table();
divinationTable.addEntry(1,1,"Mutation without, corruption within.");
divinationTable.addEntry(2,3,"Only the insane have strength enough to prosper. Only those who prosper may judge what is sane.");
divinationTable.addEntry(4,7,"Sins hidden in the heart turn all to decay.");
divinationTable.addEntry(8,8,"Innocence is an illusion.");
divinationTable.addEntry(9,11,"Dark dreams lie upon the heart.");
divinationTable.addEntry(12,15,"The pain of the bullet is ecstasy compared to damnation.");
divinationTable.addEntry(16,18,"Kill the alien before it can speak its lies.");
divinationTable.addEntry(19,21,"Truth is subjective.");
divinationTable.addEntry(22,26,"Know the mutant; kill the mutant.");
divinationTable.addEntry(27,30,"Even a man who has nothing can still offer his life.");
divinationTable.addEntry(31,33,"If a job is worth doing it is worth dying for.");
divinationTable.addEntry(34,38,"Only in death does duty end.");
divinationTable.addEntry(39,42,"A mind without purpose will wander in dark places.");
divinationTable.addEntry(43,46,"There are no civilians in the battle for survival.");
divinationTable.addEntry(47,50,"Violence solves everything.");
divinationTable.addEntry(51,54,"To war is human." );
divinationTable.addEntry(55,58,"Die if you must, but not with your spirit broken.");
divinationTable.addEntry(59,62,"The gun is mightier than the sword.");
divinationTable.addEntry(63,66,"Be a boon to your brothers and bane to your enemies.");
divinationTable.addEntry(67,70,"Men must die so that Man endures.");
divinationTable.addEntry(71,74,"In the darkness, follow the light of Terra.");
divinationTable.addEntry(75,79,"The only true fear is of dying with your duty not done.");
divinationTable.addEntry(80,85,"Thought begets Heresy; Heresy begets Retribution.");
divinationTable.addEntry(86,90,"The wise man learns from the deaths of others.");
divinationTable.addEntry(91,94,"A suspicious mind is a healthy mind.");
divinationTable.addEntry(95,97,"Trust in your fear.");
divinationTable.addEntry(98,99,"There is no substitute for zeal.");
divinationTable.addEntry(100,100,"Do not ask why you serve. Only ask how.");