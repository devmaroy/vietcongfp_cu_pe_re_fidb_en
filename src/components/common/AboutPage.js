import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    const pageBody = (
        <div className="page_body">
            <p>
                The player takes on the role of Sergeant First Class Steve R. Hawkins, assigned to the United States Special Forces ("Green Berets") camp at a strategic location of Nui Pek in South Vietnam near the Cambodian border. Hawkins and his A-Team carry out a series of various missions against the Viet Cong and North Vietnamese forces. The game ends in a massive North Vietnamese attack on the team's base camp which is ultimately abandoned by all American forces.
            </p>

            <p>
                The ground assault on Nui Pek is a recreation of the ground assault that happened at Special Forces Camp Lang Vei.
            </p>

            <p>
                Vietcong has the player take part in military operations against the Viet Cong and later also the North Vietnamese Army. Some levels are highly linear, while others take place in more open outdoor environments, allowing for more tactical freedom. Missions typically require the player to sabotage weapons caches or simply clear areas of enemies - usually not all objectives need to be achieved in order to complete a mission. Gameplay mostly revolves around open combat in the jungle, tunnels and other locations typical for the setting but the player occasionally also has to traverse longer passages without encountering enemies during which punji pits and other traps pose the main threat.
            </p>

            <p>
                Vietcong aims for a high level of authenticity and realism. AI characters make frequent use of cover but change the latter often, making it difficult for the player to anticipate enemies' specific locations and encouraging a tactical approach.[2] All weapons' aim sights can be used to increase aim but a sway is present which simulates a shooter's shaking hands. The latter can be reduced by entering a crouching or prone stance. While aiming the gun is raised, which allows the player to shoot over cover without fully exposing himself. The game avoids the use of health packs and rather has the player use bandages, which briefly exposes him, or have a medic treat his wounds. The game features a variety of authentic weapons from the era such as the M-16 and AK-47 assault rifles. The player is able to choose the weapons he wants to go on a mission with in advance but can also replace them with weapons found on missions, giving him access to weapons used by the enemies. In some missions airstrikes can be ordered to bombard specific areas of the map.
            </p>

            <p>
                Typically for tactical shooters the player is usually accompanied by AI controlled comrades. Each of the fellow soldiers is a unique character who is not allowed to die and serves a specific role in the team. For instance the point man can safely lead the team towards the objective, avoiding any traps and warning the player of enemies in advance, while a combat engineer carries an infinite supply of ammo for the player. By default the team simply follows the player character and engages at will but general orders such as to attack the enemy or retreat can be given. The fellow soldiers can also be called individually to the player character's location.
            </p>

            <h3>Quick fight</h3>
            <p>   
                In addition to the main campaign a "quick fight" mode is available. The latter allows the player to simply engage in a fight on one of several arena-like maps with the sole objective of eliminating all enemies. The player can choose whether he wishes to be accompanied by a team, how many and what kind of enemies to engage, and what equipment he wishes to go on the mission with. In this mode the player is also able to assume the role of a Viet Cong combatant and engage American soldiers. By default only a single map and few weapons are available but more become available as the player makes progress in the game's main campaign.
            </p>

            <img src="https://www.oldpcgaming.net/wp-content/gallery/vietcong/22_1.jpg" alt="Vietcong game"/>

            <h3>Multiplayer</h3>
            <p>
                The game also features a local and online multiplayer mode which supports up to 64 players per match. The online lobby servers were hosted by GameSpy Arcade, which was since shut down, and are thus not accessible anymore.
            </p>

            <p>
                Several gameplay modes typical for shooter games are available: Free for all deathmatch, team deathmatch, capture the flag and last man standing. Additionally a team mode is available where, similarly to Counter-Strike, players remain dead for the remainder of the current round and teams only score a point if the opposite team has been completely annihilated
            </p>
        </div>
    );

    return (
        <div className="content-container">
            <div className="page">
                <h1 className="page__title">About Vietcong</h1>            
                { pageBody }
            </div>
        </div>
    );
};

export default AboutPage;