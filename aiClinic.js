const conditions = [
    { 
        name: 'Flu or Cold', 
        symptoms: ['fever', 'cough'], 
        medicines: [{ name: 'Acetaminophen', price: 10 }, { name: 'Ibuprofen', price: 8 }],
        dosAndDonts: {
            dos: ['Stay hydrated', 'Rest well'],
            donts: ['Avoid alcohol', 'Don’t go out in cold weather']
        }
    },
    { 
        name: 'Digestive Issue', 
        symptoms: ['stomach ache', 'nausea'], 
        medicines: [{ name: 'Antacids', price: 12 }, { name: 'Anti-Nausea', price: 5 }],
        dosAndDonts: {
            dos: ['Eat bland foods', 'Drink clear liquids'],
            donts: ['Avoid spicy foods', 'Don’t skip meals']
        }
    },
    // Additional 100 conditions
    { 
        name: 'Headache', 
        symptoms: ['head pain', 'sensitivity to light'], 
        medicines: [{ name: 'Aspirin', price: 7 }, { name: 'Paracetamol', price: 6 }],
        dosAndDonts: {
            dos: ['Rest in a dark room', 'Stay hydrated'],
            donts: ['Avoid bright lights', 'Don’t skip meals']
        }
    },
    { 
        name: 'Back Pain', 
        symptoms: ['lower back pain', 'muscle stiffness'], 
        medicines: [{ name: 'Ibuprofen', price: 8 }, { name: 'Muscle Relaxant', price: 15 }],
        dosAndDonts: {
            dos: ['Apply heat or ice', 'Maintain good posture'],
            donts: ['Avoid heavy lifting', 'Don’t sit for too long']
        }
    },
    { 
        name: 'Sinusitis', 
        symptoms: ['nasal congestion', 'facial pain'], 
        medicines: [{ name: 'Decongestant', price: 10 }, { name: 'Nasal Spray', price: 7 }],
        dosAndDonts: {
            dos: ['Use a humidifier', 'Stay hydrated'],
            donts: ['Avoid allergens', 'Don’t use too much nasal spray']
        }
    },
    { 
        name: 'Allergic Rhinitis', 
        symptoms: ['sneezing', 'itchy eyes'], 
        medicines: [{ name: 'Antihistamine', price: 9 }, { name: 'Nasal Spray', price: 7 }],
        dosAndDonts: {
            dos: ['Avoid allergens', 'Keep windows closed'],
            donts: ['Don’t touch your face', 'Avoid outdoor activities']
        }
    },
    { 
        name: 'Asthma', 
        symptoms: ['wheezing', 'shortness of breath'], 
        medicines: [{ name: 'Inhaler', price: 30 }, { name: 'Steroid', price: 25 }],
        dosAndDonts: {
            dos: ['Use your inhaler as prescribed', 'Avoid triggers'],
            donts: ['Don’t smoke', 'Avoid cold air']
        }
    },
    { 
        name: 'Bronchitis', 
        symptoms: ['cough', 'sputum production'], 
        medicines: [{ name: 'Expectorant', price: 11 }, { name: 'Cough Syrup', price: 12 }],
        dosAndDonts: {
            dos: ['Stay hydrated', 'Rest'],
            donts: ['Avoid smoke', 'Don’t go out in cold weather']
        }
    },
    { 
        name: 'Urinary Tract Infection', 
        symptoms: ['painful urination', 'frequent urge to urinate'], 
        medicines: [{ name: 'Antibiotics', price: 20 }, { name: 'Pain Reliever', price: 8 }],
        dosAndDonts: {
            dos: ['Drink plenty of water', 'Complete the antibiotic course'],
            donts: ['Avoid caffeine', 'Don’t hold urine']
        }
    },
    { 
        name: 'Sinus Headache', 
        symptoms: ['facial pressure', 'nasal congestion'], 
        medicines: [{ name: 'Decongestant', price: 10 }, { name: 'Pain Reliever', price: 8 }],
        dosAndDonts: {
            dos: ['Use a humidifier', 'Stay hydrated'],
            donts: ['Avoid sudden temperature changes', 'Don’t ignore symptoms']
        }
    },
    { 
        name: 'Ear Infection', 
        symptoms: ['ear pain', 'fluid drainage'], 
        medicines: [{ name: 'Antibiotics', price: 18 }, { name: 'Pain Reliever', price: 8 }],
        dosAndDonts: {
            dos: ['Keep the ear dry', 'Follow the doctor’s advice'],
            donts: ['Don’t insert objects into the ear', 'Avoid swimming']
        }
    },
    { 
        name: 'Fever', 
        symptoms: ['elevated temperature', 'chills'], 
        medicines: [{ name: 'Acetaminophen', price: 10 }, { name: 'Ibuprofen', price: 8 }],
        dosAndDonts: {
            dos: ['Rest', 'Drink fluids'],
            donts: ['Avoid overheating', 'Don’t take cold baths']
        }
    },
    // More records here
    { 
        name: 'Pneumonia', 
        symptoms: ['cough', 'fever', 'shortness of breath'], 
        medicines: [{ name: 'Antibiotics', price: 25 }, { name: 'Cough Syrup', price: 12 }],
        dosAndDonts: {
            dos: ['Rest', 'Stay hydrated'],
            donts: ['Avoid strenuous activities', 'Don’t ignore symptoms']
        }
    },
    { 
        name: 'Dermatitis', 
        symptoms: ['skin rash', 'itchiness'], 
        medicines: [{ name: 'Anti-Itch Cream', price: 15 }, { name: 'Antihistamine', price: 9 }],
        dosAndDonts: {
            dos: ['Apply moisturizer', 'Avoid scratching'],
            donts: ['Don’t use harsh soaps', 'Avoid irritants']
        }
    },
    { 
        name: 'Gastritis', 
        symptoms: ['stomach pain', 'nausea'], 
        medicines: [{ name: 'Antacids', price: 12 }, { name: 'Proton Pump Inhibitors', price: 18 }],
        dosAndDonts: {
            dos: ['Eat small, frequent meals', 'Avoid spicy foods'],
            donts: ['Don’t eat large meals', 'Avoid alcohol']
        }
    },
    { 
        name: 'Hypertension', 
        symptoms: ['headache', 'dizziness'], 
        medicines: [{ name: 'Antihypertensive', price: 22 }, { name: 'Diuretic', price: 15 }],
        dosAndDonts: {
            dos: ['Monitor blood pressure', 'Maintain a healthy diet'],
            donts: ['Avoid excessive salt', 'Don’t skip medications']
        }
    },
    { 
        name: 'Diabetes', 
        symptoms: ['increased thirst', 'frequent urination'], 
        medicines: [{ name: 'Insulin', price: 40 }, { name: 'Metformin', price: 20 }],
        dosAndDonts: {
            dos: ['Monitor blood sugar levels', 'Follow a balanced diet'],
            donts: ['Don’t skip meals', 'Avoid sugary foods']
        }
    },
    { 
        name: 'Chronic Fatigue Syndrome', 
        symptoms: ['persistent fatigue', 'muscle pain'], 
        medicines: [{ name: 'Pain Reliever', price: 8 }, { name: 'Antidepressant', price: 30 }],
        dosAndDonts: {
            dos: ['Rest adequately', 'Manage stress'],
            donts: ['Avoid overexertion', 'Don’t ignore symptoms']
        }
    },
    // Add remaining records similarly...
];
var randomCondition="";
    // Check for browser support for Web Speech API
    function isSpeechSynthesisSupported() {
        return 'speechSynthesis' in window;
    }

    function speak(text) {
        if (isSpeechSynthesisSupported()) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        } else {
            console.warn('Speech synthesis not supported in this browser.');
        }
    }

    function getRandomCondition() {
        const randomIndex = Math.floor(Math.random() * conditions.length);
        return conditions[randomIndex];
    }

    document.getElementById('scanButton').addEventListener('click', function() {
        speak('Starting scan. please stand still');
        setTimeout(function() {
            speak('Getting vitals');
        }, 5000);

        setTimeout(function() {
            speak('scaning muzzles');
        }, 10000);

        setTimeout(function() {
            speak('geting X-ray');
        }, 15000);

        setTimeout(function() {
            speak('scan completed thank you');
        }, 20000);
        
        document.getElementById('scanImg').style.display = 'block';

        // Simulate scan process
        setTimeout(function() {
            document.getElementById('scanImg').style.display = 'none';
            document.getElementById('result').style.display = 'block';
            
            // Display random condition data
            randomCondition = getRandomCondition();
            speak(`you have de dignosed with${randomCondition.name} takeing the below medicines should make you feel good also consider following the suggestions thank you`);
            document.getElementById('diagnosis').innerText = randomCondition.name;
            document.getElementById('medicines').innerText = randomCondition.medicines.map(med => `${med.name}: $${med.price}`).join(', ');
            document.getElementById('dosAndDonts').innerHTML = `
                <strong>Dos:</strong> ${randomCondition.dosAndDonts.dos.join(', ')}<br>
                <strong>Don'ts:</strong> ${randomCondition.dosAndDonts.donts.join(', ')}
            `;
            document.getElementById('purchasePrompt').style.display = 'block';
        }, 20500); // Simulate scan time
    });

    document.getElementById('purchaseYes').addEventListener('click', function() {
        document.getElementById('purchasePrompt').style.display = 'none';
        document.getElementById('paymentSection').style.display = 'block';
    });

    document.getElementById('purchaseNo').addEventListener('click', function() {
    // Hide the purchase prompt
    document.getElementById('purchasePrompt').style.display = 'none';

    // Prepare the summary details
    const summaryDetails = `
        <h2>Diagnosis Summary:</h2>
        <p><strong>Condition:</strong> ${randomCondition.name}</p>
        <p><strong>Suggested Medicines:</strong> ${randomCondition.medicines.map(med => `${med.name}: $${med.price}`).join(', ')}</p>
        <p><strong>Dos:</strong> ${randomCondition.dosAndDonts.dos.join(', ')}</p>
        <p><strong>Don'ts:</strong> ${randomCondition.dosAndDonts.donts.join(', ')}</p>
    `;

    // Display the summary and thank you message
    document.getElementById('thankYouMessage').innerHTML = `${summaryDetails}<p>Thank you for visiting our clinic!</p>`;
    document.getElementById('thankYouMessage').style.display = 'block';
    setTimeout(function() {
        location.reload();
    }, 10000);
});

    document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('paymentSection').style.display = 'none';
    document.getElementById('billSection').style.display = 'block';

    // Example bill details
    const medicines = randomCondition.medicines; // Assuming `randomCondition` is available in scope
    const billDetails = medicines.map(med => `${med.name}: $${med.price}`).join(', ');

    // Calculate the total amount
    const totalAmount = medicines.reduce((sum, med) => sum + med.price, 0).toFixed(2);

    // Update the bill details and total amount on the page
    document.getElementById('billDetails').innerText = billDetails;
    document.getElementById('billingTotal').innerText = `Total: $${totalAmount}`;

    document.getElementById('thankYouMessage').innerText = 'Thank you for visiting our clinic!';
    document.getElementById('thankYouMessage').style.display = 'block';
    setTimeout(function() {
        location.reload();
    }, 10000);
});