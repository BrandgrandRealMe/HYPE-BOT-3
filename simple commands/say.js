module.exports = {
  name: "say",
  description: "Say command :3",
  global: false,
  options: [
    {
      name: "text",
      description: "write something =3",
      type: 3,
      required: true
    }
  ],
  async execute(client, interaction, args) {
    let msg = args._hoistedOptions[0].value;
    await interaction.reply({ content: msg });
  }
};