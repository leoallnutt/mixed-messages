const teams = ['Arsenal', 'Aston Villa', 'Barnsley', 'Birmingham City',
'Blackburn Rovers', 'Blackpool', 'Bolton Wanderers', 'Bournemouth', 'Bradford City'
,'Brentford', 'Brighton & Hove Albion', 'Burnley', 'Cardiff City', 
'Charlton Athletic', 'Chelsea', 'Coventry City', 'Crystal Palace', 
'Derby County', 'Everton', 'Fulham', 'Huddersfield Town', 'Hull City', 'Ipswich Town',
 'Leeds United', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United',
  'Middlesbrough', 'Newcastle United', 'Norwich City', 'Nottingham Forest', 
  'Oldham Athletic', 'Portsmouth', 'Queens Park Rangers', 'Reading', 'Sheffield United'];
 
const gameTimes = ['12:30', '16:30', '15:00', '17:00', '17:30', '20:00'];

const teamAScore = Math.floor((Math.random() * 6) + 1);
const teamBScore = Math.floor((Math.random() * 6) + 1);



const getTeamA = teams[Math.floor(Math.random()*teams.length)];
const getTeamB = teams[Math.floor(Math.random()*teams.length)];


//if team a === team b = +1

function generateScore () {
    return getTeamA + getTeamB;
    if (getTeamA === getTeamB) {
        return getTeamA +1;
    }
    
};

console.log(generateScore());