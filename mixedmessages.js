const teams = ['Arsenal', 'Aston Villa', 'Barnsley', 'Birmingham City',
'Blackburn Rovers', 'Blackpool', 'Bolton Wanderers', 'Bournemouth', 'Bradford City'
,'Brentford', 'Brighton & Hove Albion', 'Burnley', 'Cardiff City', 
'Charlton Athletic', 'Chelsea', 'Coventry City', 'Crystal Palace', 
'Derby County', 'Everton', 'Fulham', 'Huddersfield Town', 'Hull City', 'Ipswich Town',
 'Leeds United', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United',
  'Middlesbrough', 'Newcastle United', 'Norwich City', 'Nottingham Forest', 
  'Oldham Athletic', 'Portsmouth', 'Queens Park Rangers', 'Reading', 'Sheffield United'];

const gameTimes = ['12:30', '16:30', '15:00', '17:00', '17:30', '20:00'];

//Takes a random team from the teams array
const getTeamA = teams[Math.floor(Math.random()*teams.length)];
const getTeamB = teams[Math.floor(Math.random()*teams.length)];

//Takes a random time from the gameTimes array
const time = gameTimes[Math.floor(Math.random()*gameTimes.length)];

//Creates a random score for both of the teams
const teamAScore = Math.floor((Math.random() * 4) + 1);
const teamBScore = Math.floor((Math.random() * 4) + 1);


function generateScore () {
    if (getTeamA === getTeamB) {
        return `${teams[0]} ${teamAScore} - ${teams[1]} ${teamBScore} / Time: ${time}`;
    } else { 
        return `${getTeamA} ${teamAScore} - ${getTeamB} ${teamBScore} / Time: ${time}`;
    }
};

console.log(generateScore());