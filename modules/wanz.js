async function FCModules(sock, target) {
    try {
        const jid = target.includes('@s.whatsapp.net') 
            ? target 
            : `${target.replace(/[^0-9]/g, '')}@s.whatsapp.net`;

        const sent = await sock.sendMessage(jid, {
            text: 'p'
        });

        console.log(`✅ Pesan "p" terkirim ke ${target}`);

        return {
            success: true,
            to: target,
            timestamp: new Date().toISOString(),
            messageId: sent?.key?.id || null
        };

    } catch (error) {
        console.error(`❌ Gagal kirim ke ${target}:`, error.message);
        
        return {
            success: false,
            to: target,
            error: error.message,
            timestamp: new Date().toISOString()
        };
    }
}

module.exports = FCModules;
