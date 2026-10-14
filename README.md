# PolyStar

**Become a Raees of Lahore.**

A 3D property-trading game set in Lahore, priced in Pakistani Rupees. Shahdara is the cheapest square (Rs 6 Lac) and DHA Phase 6 the most expensive (Rs 40 Lac). There are 100 pawns, CPU opponents and sound effects. You can play on one device or online with friends.

## New players

- **Home tour:** after the splash screen, a quick tour points at the profile, music, help, background, timer, game modes and the Play button. Tap **?** on the menu to see it again.
- **Profile:** your name, pawn, games played and wins sit in the top-left corner of the menu. Tap it to edit.
- **Training match:** the first time you tap Play, you can play a guided 2-minute match against Ustad Bot. You tap Roll, but the dice are scripted so every rule comes up in order, with tips explaining each one. It always ends with you winning.
- **Online unlock:** creating your own online rooms unlocks after you finish one game (the training match counts). Anyone with a room link or a friend's invite can join straight away.
- **In-game tour:** tap **?** on the right side during a game to see how the game screen works.

## Put it online with GitHub Pages (free, about 5 minutes)

1. Sign in at https://github.com (create a free account if you don't have one).
2. Click **+** at the top right, then **New repository**.
   - Name: `lahore-monopoly`
   - Set it to **Public**
   - Click **Create repository**
3. On the new repository page, click **uploading an existing file**. Drag in all five files: `index.html`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png` and `README.md`. Then click **Commit changes**.
4. Go to **Settings**, then **Pages** in the left menu.
   - Under **Build and deployment**, set Source to **Deploy from a branch**
   - Set Branch to **main** and the folder to **/ (root)**, then click **Save**
5. Wait 1 to 2 minutes and refresh the page. Your game link appears at the top:
   `https://YOUR-USERNAME.github.io/lahore-monopoly/`

To update the game later, upload the new `index.html` the same way. It replaces the old one.

## Install it like an app

Open your game link on your phone.
- **Android (Chrome):** tap the ⋮ menu, then **Add to Home screen** (or **Install app**).
- **iPhone (Safari):** tap Share, then **Add to Home Screen**.

It opens full screen with its own icon.

## Play online with friends

1. Open the game, tap **Online with friends**, type your name and pick a pawn.
2. Tap **Create room**. You get a 5-letter room code and a link.
3. Send the link with **WhatsApp** or **Copy link**. Friends who open the link only need to type their name and tap **Join**. They can also enter the code on the menu.
4. Add CPU players if you like (up to 6 players in total), then tap **Start game**.

In the game, the buttons on the left are for **chat** (quick phrases, emojis or typed messages that pop up over your avatar), your **microphone** (tap to talk; a green ring glows on whoever is speaking) and **voices on/off**. Your browser will ask permission the first time you turn the mic on.

Good to know:
- The host's device runs the game. **The host should keep the game open and the screen on.** If the host locks their phone or switches apps, the game pauses for everyone until they come back.
- If a friend disconnects, a CPU player takes over their pawn so the game can continue.
- Players connect directly to each other using PeerJS (free, no account needed). A few strict office or school networks block this kind of connection. If joining fails, try mobile data.

## Friends

Tap the **people** button at the top of the menu.
- **Your friend code:** 6 letters and numbers, shown at the top. Send it with **Copy** or **Share on WhatsApp**. A friend who opens your shared link adds you automatically.
- **Add a friend:** type their code and tap **Add friend**. You appear in their list too. After an online game, people you played with show under **Played with recently** with a **+ Add** button. In a room, you can tap **+ Friend** next to a player.
- **Who's online:** a green dot means the friend has PolyStar open right now. Their line says what they're doing (in the menu, in a room, playing a game). Otherwise it shows when they were last seen. The green number on the people button counts friends online.
- **Invite:** tap **Invite** next to an online friend. If you're not in a room yet, one is created for you. Your friend gets a pop-up with **Join**. If a friend is hosting a room, you'll see **Join** next to their name instead.

Friends show as online only while PolyStar is open on their phone. If they close it or lock the screen, they appear offline after about 30 seconds.

## Money rules and turn timer

Everyone starts with Rs 0 and earns Rs 5 Lac each time they pass Shuru Chowk. Until a player gets their first salary, they pay nothing: no taxes, fees, fines or rent.

Every tax, fine and fee goes into the **Committee pot** (shown under the players). Whoever lands on **Free Parking** wins the whole pot, however much has built up.

Some Qismat and Mohalla Chest cards use the players' real names, like "It's Ayesha's birthday! Everyone gives Ayesha Rs 50,000."

A green ring counts down around the current player's avatar and the Roll button. It turns yellow, then red, and ticks for the last 5 seconds. If time runs out, the game plays that move automatically (rolls, skips buying, or ends the turn). Building or mortgaging resets the timer. Choose 10s, 20s, 30s or Off on the menu; online games use the host's setting.

## Your property cards

Your properties stack up as cards in the bottom-right corner. Tap the stack to spread them out. Each card has two buttons: the blue bank button mortgages it for quick cash (or pays the mortgage back), and the green house button builds a house or hotel once you own the whole colour set. When you owe money, the house button sells houses instead.

## Music

Soft lo-fi jazz plays in the background: electric piano, walking bass, brush drums and vinyl crackle. It's generated live in the game, so it never repeats exactly. It starts after your first tap (browsers require that). Turn it on or off with the music-note button on the menu (top right) or in a game (right side). Your choice is remembered.

Soft rain plays underneath the jazz as one mix; the same music button turns both on or off. The rain gets heavier on the Barish background.

## Backgrounds

Pick a background on the menu: Basant Sky, Lahore Sunset, Truck Art Mela, Food Street Night, Chand Raat, Barish or Stadium Night. Or choose Random for a surprise each game. In online games everyone sees the host's choice.

## Play on one device

Tap **Same device**, choose 2 to 6 players (human or CPU) and pass the phone around.
