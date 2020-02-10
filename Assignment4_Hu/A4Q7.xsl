<?xml version="1.0" encoding="utf-8" ?>

<xsl:stylesheet version = "1.0"
	xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

    	<xsl:output method = "html" doctype-system = "about:legacy-compat" />
    	<xsl:template match = "/">

        <html xmlns = "http://www.w3.org/1999/xhtml">
            <head>
		<meta charset = "utf-8"/>
                <title>A4Q7</title>
            </head>

            <body> 
			<h1><xsl:value-of select = "product/@name"/></h1> 
			<h2><xsl:value-of select = "product/servingsize"/></h2> 
				<table border = "1" style = "background-color: lemonchiffon"> 
					<thead> 
						<tr> 
							<th>calories</th> 
							<th>fat</th> 
							<th>cholesterol</th> 
							<th>sodium</th> 
							<th>carbohydrates</th> 
							<th>protein</th> 
						</tr> 
					</thead> 
					
					<xsl:for-each select = "product"> 
					<tr> 
						<td>total: <xsl:value-of select = "calories/total"/></td> 
						<td>total: <xsl:value-of select = "fat/total"/></td> 
						<td><xsl:value-of select = "cholesterol"/></td> 
						<td><xsl:value-of select = "sodium"/></td> 
						<td>total: <xsl:value-of select = "carbohydrates/total"/></td>
						<td><xsl:value-of select = "protein"/></td> 
					</tr> 
					</xsl:for-each> 
					
					<xsl:for-each select = "product"> 
					<tr> 
						<td>fat: <xsl:value-of select = "calories/fat"/></td> 
						<td>saturated: <xsl:value-of select = "fat/saturated"/></td> 
						<td></td> 
						<td></td> 
						<td>fiber: <xsl:value-of select = "carbohydrates/fiber"/></td> 
						<td></td> 
					</tr> 
					</xsl:for-each> 
					
					<xsl:for-each select = "product"> 
					<tr> 
						<td></td> 
						<td></td> 
						<td></td> 
						<td></td> 
						<td>sugars: <xsl:value-of select ="carbohydrates/sugars"/></td> 
						<td></td> 
					</tr> 
				</xsl:for-each> 
			</table> 
		</body> 
        </html>
    </xsl:template>
</xsl:stylesheet>