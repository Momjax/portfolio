import re

with open('veille.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_block = """                <div class="grid grid-2" style="gap: 1.5rem;">
                    <div style="background: rgba(248, 81, 73, 0.1); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--danger);">
                        <strong style="font-size: 2rem; color: var(--danger);">51%</strong>
                        <p style="margin: 0.5rem 0 0;">du trafic web est généré par des bots (dont 37% malveillants)</p>
                    </div>
                    <div style="background: rgba(248, 81, 73, 0.1); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--danger);">
                        <strong style="font-size: 2rem; color: var(--danger);">25%</strong>
                        <p style="margin: 0.5rem 0 0;">des endpoints API ne sont pas documentés (APIs fantômes)</p>
                    </div>
                    <div style="background: rgba(248, 81, 73, 0.1); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--danger);">
                        <strong style="font-size: 2rem; color: var(--danger);">186 Mds $</strong>
                        <p style="margin: 0.5rem 0 0;">de pertes annuelles dues à l'insécurité des APIs</p>
                    </div>
                    <div style="background: rgba(248, 81, 73, 0.1); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--danger);">
                        <strong style="font-size: 2rem; color: var(--danger);">44%</strong>
                        <p style="margin: 0.5rem 0 0;">du trafic bot avancé cible spécifiquement les APIs</p>
                    </div>
                </div>"""

new_block = """                <div class="grid grid-2" style="gap: 1.5rem;">
                    <!-- Chart 1: 51% -->
                    <div style="display: flex; align-items: center; gap: 1rem; background: rgba(248, 81, 73, 0.05); padding: 1.2rem; border-radius: var(--radius-md); border: 1px solid rgba(248, 81, 73, 0.15); transition: transform 0.3s ease;">
                        <div style="flex-shrink: 0; width: 65px; height: 65px; border-radius: 50%; background: conic-gradient(var(--danger) 51%, rgba(248, 81, 73, 0.15) 0); display: flex; align-items: center; justify-content: center;">
                            <div style="width: 48px; height: 48px; background: var(--bg-card); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <strong style="font-size: 0.95rem; color: var(--danger);">51%</strong>
                            </div>
                        </div>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--text-primary); line-height: 1.4;">du trafic web est généré par des bots <span class="text-muted">(dont 37% malveillants)</span></p>
                    </div>
                    <!-- Chart 2: 25% -->
                    <div style="display: flex; align-items: center; gap: 1rem; background: rgba(248, 81, 73, 0.05); padding: 1.2rem; border-radius: var(--radius-md); border: 1px solid rgba(248, 81, 73, 0.15); transition: transform 0.3s ease;">
                        <div style="flex-shrink: 0; width: 65px; height: 65px; border-radius: 50%; background: conic-gradient(var(--danger) 25%, rgba(248, 81, 73, 0.15) 0); display: flex; align-items: center; justify-content: center;">
                            <div style="width: 48px; height: 48px; background: var(--bg-card); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <strong style="font-size: 0.95rem; color: var(--danger);">25%</strong>
                            </div>
                        </div>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--text-primary); line-height: 1.4;">des endpoints API ne sont pas documentés <span class="text-muted">(APIs fantômes)</span></p>
                    </div>
                    <!-- Chart 3: 186 Mds $ -->
                    <div style="display: flex; align-items: center; gap: 1rem; background: rgba(248, 81, 73, 0.05); padding: 1.2rem; border-radius: var(--radius-md); border: 1px solid rgba(248, 81, 73, 0.15); transition: transform 0.3s ease;">
                        <div style="flex-shrink: 0; width: 65px; height: 65px; border-radius: 50%; background: conic-gradient(var(--danger) 100%, rgba(248, 81, 73, 0.15) 0); display: flex; align-items: center; justify-content: center;">
                            <div style="width: 48px; height: 48px; background: var(--bg-card); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-dollar-sign" style="font-size: 1.2rem; color: var(--danger);"></i>
                            </div>
                        </div>
                        <div style="flex: 1;">
                            <strong style="font-size: 1.1rem; color: var(--danger); display: block; margin-bottom: 0.2rem;">186 Mds $</strong>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--text-primary); line-height: 1.4;">de pertes annuelles dues à l'insécurité des APIs</p>
                        </div>
                    </div>
                    <!-- Chart 4: 44% -->
                    <div style="display: flex; align-items: center; gap: 1rem; background: rgba(248, 81, 73, 0.05); padding: 1.2rem; border-radius: var(--radius-md); border: 1px solid rgba(248, 81, 73, 0.15); transition: transform 0.3s ease;">
                        <div style="flex-shrink: 0; width: 65px; height: 65px; border-radius: 50%; background: conic-gradient(var(--danger) 44%, rgba(248, 81, 73, 0.15) 0); display: flex; align-items: center; justify-content: center;">
                            <div style="width: 48px; height: 48px; background: var(--bg-card); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <strong style="font-size: 0.95rem; color: var(--danger);">44%</strong>
                            </div>
                        </div>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--text-primary); line-height: 1.4;">du trafic bot avancé cible spécifiquement les APIs</p>
                    </div>
                </div>"""

# Remove invisible carriage returns to ensure exact match 
content_clean = content.replace('\\r\\n', '\\n')
old_block_clean = old_block.replace('\\r\\n', '\\n')

if old_block_clean in content_clean:
    new_content = content_clean.replace(old_block_clean, new_block)
    with open('veille.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Succès")
else:
    print("Le bloc original n'a pas été trouvé")
    # essayons avec regex ignore whitespaces
    pattern = re.sub(r'\\s+', r'\\s*', old_block_clean)
    match = re.search(pattern, content_clean)
    if match:
        new_content = content_clean[:match.start()] + new_block + content_clean[match.end():]
        with open('veille.html', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Succès avec regex")
