// Function to load participant data
async function loadParticipants() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        displayParticipants(data.participants);
    } catch (error) {
        console.error('Error loading participants:', error);
        document.getElementById('participantsList').innerHTML = '<p>Error loading participants data.</p>';
    }
}

// Function to display participants
function displayParticipants(participants) {
    const participantsList = document.getElementById('participantsList');
    
    participants.forEach(participant => {
        const card = document.createElement('div');
        card.className = 'participant-card';
        
        card.innerHTML = `
            <h3>${participant.name}</h3>
            <div class="participant-info">
                <p><strong>Year:</strong> ${participant.year}</p>
                <p><strong>Department:</strong> ${participant.department}</p>
                <p><strong>ID Code:</strong> ${participant.idCode}</p>
            </div>
            ${participant.feedback ? `
                <div class="feedback">
                    <p>"${participant.feedback}"</p>
                </div>
            ` : ''}
        `;
        
        participantsList.appendChild(card);
    });
}

// Load participants when the page loads
document.addEventListener('DOMContentLoaded', loadParticipants);